import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity.ts';
import { Profile } from './entity/profile.entity.ts';
import { Permissions } from './entity/permissions.entity.ts';
import { LocalFile } from './entity/local-file.entity.ts';
import { Photo } from './entity/photo.entity.ts';
import { Vid } from './entity/vid.entity.ts';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'user',
  synchronize: true,
  logging: true,
  entities: [User, Profile, Permissions, LocalFile, Photo, Vid],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};