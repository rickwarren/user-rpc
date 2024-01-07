import { PhotoProto, createPhotoProto } from '../protos/photo.pb.ts';
import { getDataSource } from '../data-source.ts';
import { PhotoId } from '../dto/photoId.dto.ts';
import { PhotosResponseDto } from '../dto/photosResponse.dto.ts';
import { Photo } from '../entity/photo.entity.ts';
import { PhotoDto } from '../dto/photo.dto.ts';
import { CreatePhotoDto } from '../dto/create-photo.dto.ts';
import { DeletePhotoResponseDto } from '../dto/DeletePhotoResponse.dto.ts';

const photoProto: PhotoProto = {
    getPhotos: async (photoId: PhotoId): Promise<PhotosResponseDto> => {
        const AppDataSource = await getDataSource();
        const photoRepo = AppDataSource.getRepository(Photo);
        const photos = await photoRepo.manager.findBy(Photo, { userId: photoId.id });
        if(!photos) {
            throw Error('Photos not found');
        }
        return { photos: photos };
    },
    getPhoto: async (photoId: PhotoId): Promise<PhotoDto> => {
        const AppDataSource = await getDataSource();
        const photoRepo = AppDataSource.getRepository(Photo);
        const photo = await photoRepo.manager.findOneBy(Photo, { id: photoId.id });
        if(!photo) {
            throw Error('Photo not found');
        }
        return photo;
    },
    createPhoto: async (data: CreatePhotoDto): Promise<PhotoDto> => {
        const AppDataSource = await getDataSource();
        const photoRepo = AppDataSource.getRepository(Photo);
        const newPhoto = await photoRepo.manager.create(Photo, data);
        const photo = await photoRepo.manager.save(Photo, newPhoto);
        if(!photo) {
            throw Error('unable to create Photo');
        }
        return photo;
    },
    deletePhoto: async (photoId: PhotoId): Promise<DeletePhotoResponseDto> => {
        const AppDataSource = await getDataSource();
        const photoRepo = AppDataSource.getRepository(Photo);
        const result = await photoRepo.manager.delete(Photo, { where: { id: photoId.id }});
        if(!result) {
            throw Error('Unable to delete Photo');
        }
        return { success: true };
    }
  };
  
  export const photoProtoHandler = createPhotoProto(photoProto);