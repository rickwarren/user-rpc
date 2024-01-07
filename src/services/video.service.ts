import { VideoProto, createVideoProto } from '../protos/video.pb.ts';
import { getDataSource } from '../data-source.ts';
import { VideoId } from '../dto/videoId.dto.ts';
import { VideosResponseDto } from '../dto/videosResponse.dto.ts';
import { Video } from '../entity/Video.entity.ts';
import { VideoDto } from '../dto/video.dto.ts';
import { CreateVideoDto } from '../dto/create-video.dto.ts';
import { DeleteVideoResponseDto } from '../dto/deleteVideoResponse.dto.ts';

const videoProto: VideoProto = {
    getVideos: async (videoId: VideoId): Promise<VideosResponseDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Video);
        const videos = await videoRepo.manager.findBy(Video, { userId: videoId.id });
        if(!videos) {
            throw Error('Videos not found');
        }
        return { videos: videos };
    },
    getVideo: async (videoId: VideoId): Promise<VideoDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Video);
        const video = await videoRepo.manager.findOneBy(Video, { id: videoId.id });
        if(!video) {
            throw Error('Video not found');
        }
        return video;
    },
    createVideo: async (data: CreateVideoDto): Promise<VideoDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Video);
        const newVideo = await videoRepo.manager.create(Video, data);
        const video = await videoRepo.manager.save(Video, newVideo);
        if(!video) {
            throw Error('unable to create Video');
        }
        return video;
    },
    deleteVideo: async (videoId: VideoId): Promise<DeleteVideoResponseDto> => {
        const AppDataSource = await getDataSource();
        const videoRepo = AppDataSource.getRepository(Video);
        const result = await videoRepo.manager.delete(Video, { where: { id: videoId.id }});
        if(!result) {
            throw Error('Unable to delete Video');
        }
        return { success: true };
    }
  };
  
  export const videoProtoHandler = createVideoProto(videoProto);