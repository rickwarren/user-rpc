import { UserProto, createUserProto } from '../protos/user.pb.ts';
import { getDataSource } from '../data-source.ts';
import { User } from '../entity/user.entity.ts';
import { GetUsersResponseDto } from '../dto/getUsersResponse.dto.ts';
import { UserId } from '../dto/userRequest.dto.ts';
import { CreateUserDto } from '../dto/create-user.dto.ts';
import { UpdateUserDto } from '../dto/update-user.dto.ts';
import { DeleteUserResponseDto } from '../dto/deleteUserResponse.dto.ts';
import { UserByEmailDto } from '../dto/userByEmail.dto.ts';
import { UserDto } from '../protos/user.pb';
import { UserUrlString } from 'src/dto/userUrlString.dto.ts';
import { session } from '../neo4j.ts';

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
    getUserBySlug: async (slugId: UserId): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.findOneBy(User, { urlString: slugId.id });
        if(!user) {
            throw Error('User not found');
        }
        delete user.password;
        return user;
    },
    getUserByEmail: async (email: UserByEmailDto): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.findOneBy(User, { email: email.email });
        if(!user) {
            throw Error('User not found');
        }
        return user;
    },
    getUserByUrlString: async (userUrlString: UserUrlString): Promise<UserDto> => {
        const AppDataSource = await getDataSource();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.manager.findOneBy(User, { urlString: userUrlString.urlString });
        if(!user) {
            throw Error('User not found');
        }
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
        const res = await session.executeWrite(tx => tx.run(`
            CREATE (u:User {id: $id, email: $email})`, 
            { id: user.id, email: user.email }
        ))
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
        const res = await session.executeWrite(tx => tx.run(`
            MATCH (u:User {id: $id})
            DETACH DELETE u`, 
            { id: userId.id }
        ))
        return { success: true };
    }
  };
  
  export const userProtoHandler = createUserProto(userProto);