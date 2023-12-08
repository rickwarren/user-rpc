import { ProfileProto, createProfileProto } from '../protos/profile.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Profile } from '../entity/profile.entity.ts';
import { GetProfileResponseDto } from '../dto/getProfileResponse.dto.ts';
import { UserId } from '../dto/userRequest.dto.ts';
import { DeleteProfileResponseDto } from '../dto/deleteProfileResponse.dto.ts';
import { CreateProfileDto } from '../dto/create-profile.dto.ts';
import { UpdateProfileDto } from '../dto/update-profile.dto.ts';

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
    getProfile: async (userId: UserId): Promise<Profile> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile = await profileRepo.manager.findOneBy(Profile,{ ownerId: userId.id });
        if(!profile) {
            throw Error('Profile not found');
        }
        return profile;
    },
    createProfile: async (data: CreateProfileDto): Promise<Profile> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile =  await profileRepo.manager.save(Profile, data);
        if(!profile) {
            throw Error('Profile not found');
        }
        return profile;
    },
    updateProfile: async (updateProfileDto: UpdateProfileDto): Promise<Profile> => {
        const AppDataSource = await getDataSource();
        const profileRepo = AppDataSource.getRepository(Profile);
        const profile = await profileRepo.manager.save(Profile, updateProfileDto);
        if(!profile) {
            throw Error('Profile not found');
        }
        return profile;
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