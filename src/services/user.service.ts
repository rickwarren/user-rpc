import { UserProto, createUserProto } from '../protos/user.pb.ts';
import { getDataSource } from '../data-source.ts';
import { User } from '../entity/user.entity.ts';
import { GetUsersResponseDto } from '../dto/getUsersResponse.dto.ts';
import { UserId } from '../dto/userRequest.dto.ts';
import { CreateUserDto } from '../dto/create-user.dto.ts';
import { UpdateUserDto } from '../dto/update-user.dto.ts';
import { DeleteUserResponseDto } from '../dto/deleteUserResponse.dto.ts';
import { UserByEmailDto } from '../dto/userByEmail.dto.ts';
import { UserDto } from '../dto/user.dto.ts';

const userProto: UserProto = {
    getUsers: async (EmptyUser): Promise<GetUsersResponseDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const users = await userRepo.manager.find(User);
        if(users.length < 1) {
            throw Error('Users not found');
        }
        users.map((user) => {
          delete user.password;
          return user;
        });
        return { users: users };
    },
    getUser: async (userId: UserId): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.findOneBy(User, { id: userId.id });
        if(!user) {
            throw Error('User not found');
        }
        delete user.password;
        return user;
    },
    getUserByEmail: async (email: UserByEmailDto): Promise<User> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.findOneBy(User, { email: email.email });
        if(!user) {
            throw Error('User not found');
        }
        console.log(user);
        return user;
    },
    createUser: async (data: CreateUserDto): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.save(User, data);
        if(!user) {
            throw Error('unable to create user');
        }
        delete user.password;
        return user;
    },
    updateUser: async (data: UpdateUserDto): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.update(
            User,
            { id: data.id },
            data,
          );
          if(!user.raw) {
            throw Error('Unable to save user');
          }
          delete user.raw.password;
          return user.raw;
    },
    deleteUser: async (userId: UserId): Promise<DeleteUserResponseDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const result = await userRepo.manager.delete(User, { where: { id: userId.id }});
        if(!result) {
            throw Error('Unable to delete user');
        }
        return { success: true };
    }
  };
  
  export const userProtoHandler = createUserProto(userProto);