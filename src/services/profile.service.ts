import { CreateProfileDto, DeleteProfileResponseDto, GetProfileResponseDto, ProfileProto, UpdateProfileDto, createProfileProto } from '../protos/profile.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Profile } from '../entity/profile.entity.ts';
import { ProfileDto, UserId } from 'src/protos/user.pb.ts';


const profileProto: ProfileProto = {
    getProfiles: async (EmptyProfile): Promise<GetProfileResponseDto> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profiles = await profileRepo.manager.find(Profile);
        if(profiles.length < 1) {
            throw Error('Profiles not found');
        }
        return { profiles: profiles };
    },
    getProfile: async (userId: UserId): Promise<ProfileDto> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile = await profileRepo.manager.findOneBy(Profile,{ ownerId: userId.id });
        if(!profile) {
            throw Error('Profile not found');
        }
        return profile;
    },
    createProfile: async (data: CreateProfileDto): Promise<ProfileDto> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile =  await profileRepo.manager.save(Profile, data);
        if(!profile) {
            throw Error('Profile not created');
        }
        return profile;
    },
    updateProfile: async (updateProfileDto: UpdateProfileDto): Promise<ProfileDto> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile = await profileRepo.manager.update(Profile, updateProfileDto.id, updateProfileDto);
        if(!profile) {
            throw Error('Profile not saved');
        }
        return profile.raw[0];
    },
    deleteProfile: async (userId: UserId): Promise<DeleteProfileResponseDto> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile = await profileRepo.manager.delete(Profile, { where: { ownerId: userId.id }});
        if (!profile) {
            throw Error('Profile not deleted');
        }
        return { success: true }
    }
};

export const profileProtoHandler = createProfileProto(profileProto);