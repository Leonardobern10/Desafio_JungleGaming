import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from 'nestjs-pino';
import { WsAdapter } from '@nestjs/platform-ws';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useLogger(app.get(Logger));

  app.useWebSocketAdapter(new WsAdapter(app));
  console.log('Websocket ativo em ws://localhost:3004/ws');

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [String(process.env.URL_MESSAGING)],
      queue: 'notifications_queue',
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(String(process.env.NOTIFICATION_PORT));
}
bootstrap();
