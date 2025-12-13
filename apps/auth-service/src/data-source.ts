import { DataSource } from 'typeorm';
import { UserEntity } from './users/user.entity';
import * as dotenv from 'dotenv';

dotenv.config(); // carrega .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // ⚠️ true apenas no dev
});
