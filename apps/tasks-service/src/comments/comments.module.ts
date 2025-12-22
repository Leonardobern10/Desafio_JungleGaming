import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Comment } from './entities/comment.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

import 'dotenv/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATIONS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [String(process.env.URL_MESSAGING)],
          queue: 'notifications_queue',
          queueOptions: { durable: true },
        },
      },
    ]),
    TypeOrmModule.forFeature([Comment, Task]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
