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
        delete user.password;
        return user;
    },
    getUserByEmail: async (email: UserByEmailDto): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        return await userRepo.manager.findOneBy(User, { email: email.email });
    },
    createUser: async (data: CreateUserDto): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.save(User, data);
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
          delete user.raw.password;
          return user.raw;
    },
    deleteUser: async (userId: UserId): Promise<DeleteUserResponseDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        await userRepo.manager.delete(User, { id: userId.id });
        return { success: true };
    }
  };
  
  export const userProtoHandler = createUserProto(userProto);