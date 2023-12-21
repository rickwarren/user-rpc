import { LocalFileProto, createLocalFileProto } from '../protos/local-file.pb.ts';
import { getDataSource } from '../data-source.ts';
import { LocalFileDto } from '../protos/local-file.pb.ts';
import { LocalFile } from '../entity/local-file.entity.ts';
import { CreateLocalFileDto } from '../dto/create-local-file.dto.ts';
import { FileId } from '../dto/fileId.dto.ts';
import { DeleteLocalFileResponseDto } from '../dto/deleteLocalFileResponse.dto.ts';

const localFileProto: LocalFileProto = {
    getLocalFile: async (fileId: FileId): Promise<LocalFileDto> => {
        const AppDataSource = await getDataSource();
        const localFileRepo = AppDataSource.getRepository(LocalFile);
        const localFile = await localFileRepo.manager.findOneBy(LocalFile, { id: fileId.id });
        if(!localFile) {
            throw Error('File not found');
        }
        return localFile;
    },
    createLocalFile: async (data: CreateLocalFileDto): Promise<LocalFileDto> => {
        const AppDataSource = await getDataSource();
        const localFileRepo = AppDataSource.getRepository(LocalFile);
        const localFile = await localFileRepo.manager.save(LocalFile, data);
        if(!localFile) {
            throw Error('unable to create file');
        }
        return localFile;
    },
    deleteLocalFile: async (fileId: FileId): Promise<DeleteLocalFileResponseDto> => {
        const AppDataSource = await getDataSource();
        const localFileRepo = AppDataSource.getRepository(LocalFile);
        const result = await localFileRepo.manager.delete(LocalFile, { where: { id: fileId.id }});
        if(!result) {
            throw Error('Unable to delete file');
        }
        return { success: true };
    }
  };
  
  export const localFileProtoHandler = createLocalFileProto(localFileProto);