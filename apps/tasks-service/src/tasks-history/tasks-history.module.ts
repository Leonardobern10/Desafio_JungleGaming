import { Module } from '@nestjs/common';
import { TasksHistoryService } from './tasks-history.service';
import { TasksHistoryController } from './tasks-history.controller';

@Module({
  providers: [TasksHistoryService],
  controllers: [TasksHistoryController]
})
export class TasksHistoryModule {}
