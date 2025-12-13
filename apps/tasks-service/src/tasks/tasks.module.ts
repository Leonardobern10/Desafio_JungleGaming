import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskHistory } from 'src/tasks-history/entities/task-history.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
    TypeOrmModule.forFeature([Task, TaskHistory]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
