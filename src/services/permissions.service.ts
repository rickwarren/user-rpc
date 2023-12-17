import { PermissionsDto, PermissionsProto, createPermissionsProto } from '../protos/permissions.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Permissions } from '../entity/permissions.entity.ts';
import { PermissionId } from '../dto/permissionId.dto.ts';
import { CreatePermissionDto } from '../dto/create-permission.dto.ts';

import { GetPermissionsResponseDto } from '../dto/getPermissionsResponse.dto.ts';
import { DeletePermissionResponseDto } from 'src/dto/deletePermissionResponse.dto.ts';

const permissionsProto: PermissionsProto = {
    getPermissions: async (userId: PermissionId): Promise<GetPermissionsResponseDto> => {
        const AppDataSource = await getDataSource();
        const permissionsRepo = AppDataSource.getRepository(Permissions);
        const permissions = await permissionsRepo.manager.find(Permissions, { where: { userId: userId.id }})
        if(permissions.length < 1) {
            return { permissions: [] };
        }
        return { permissions: permissions };
    },

    createPermission: async (data: CreatePermissionDto): Promise<PermissionsDto> => {
        const AppDataSource = await getDataSource();
        const permissionsRepo = AppDataSource.getRepository(Permissions);
        const permission = await permissionsRepo.manager.save(Permissions, data);
        if(!permission) {
            throw Error('Permission not created');
        }
        return permission;
    },
    deletePermissions: async (userId: PermissionId): Promise<DeletePermissionResponseDto> => {
        const AppDataSource = await getDataSource();
        const permissionsRepo = AppDataSource.getRepository(Permissions);
        const permission = await permissionsRepo.manager.delete(Permissions, { where: { userId: userId.id }});
        if(!permission) {
            throw Error('Permission not deleted');
        }
        return { success: true };
    },
  };
  
  export const permissionsProtoHandler = createPermissionsProto(permissionsProto);