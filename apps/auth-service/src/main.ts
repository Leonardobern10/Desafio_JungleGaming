import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from 'nestjs-pino';
import { AppDataSource } from './data-source';

async function bootstrap() {
  await AppDataSource.initialize()
    .then(async () => {
      console.log('DataSource initialized! Running migrations...');
      await AppDataSource.runMigrations();
      console.log('Migrations executed!');
    })
    .catch((err) => {
      console.error('Error during DataSource initialization', err);
      process.exit(1);
    });

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port: Number(process.env.AUTH_PORT) || 3001,
    },
    logger: false,
  });

  app.useLogger(app.get(Logger));

  await app.listen();
}
bootstrap();
