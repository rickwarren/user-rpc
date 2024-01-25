import { CreateVidDto, DeleteVidResponseDto, UpdateVidDto, VidDto, VidId, VidProto, VidsResponseDto, createVidProto } from '../protos/vid.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Vid } from '../entity/vid.entity.ts';

const vidProto: VidProto = {
    getVids: async (id: VidId): Promise<VidsResponseDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Vid);
        const videos = await videoRepo.manager.findBy(Vid, { userId: id.id });
        if(!videos) {
            throw Error('Videos not found');
        }
        return { vids: videos };
    },
    getVid: async (id: VidId): Promise<VidDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Vid);
        const video = await videoRepo.manager.findOneBy(Vid, { id: id.id });
        if(!video) {
            throw Error('Video not found');
        }
        return video;
    },
    createVid: async (data: CreateVidDto): Promise<VidDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Vid);
        const newVideo = await videoRepo.manager.create(Vid, data);
        const video = await videoRepo.manager.save(Vid, newVideo);
        if(!video) {
            throw Error('unable to create Video');
        }
        return video;
    },
    updateVid: async (data: UpdateVidDto): Promise<VidDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Vid);
        const video = await videoRepo.manager.update(
            Vid,
            { id: data.id },
            data,
        );
        if(!video) {
            throw Error('unable to create Video');
        }
        return video.raw;
    },
    deleteVid: async (id: VidId): Promise<DeleteVidResponseDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Vid);
        const result = await videoRepo.manager.delete(Vid, { where: { id: id.id }});
        if(!result) {
            throw Error('Unable to delete Video');
        }
        return { success: true };
    }
  };
  
  export const vidProtoHandler = createVidProto(vidProto);