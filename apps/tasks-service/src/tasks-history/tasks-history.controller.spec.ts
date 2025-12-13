import { Test, TestingModule } from '@nestjs/testing';
import { TasksHistoryController } from './tasks-history.controller';

describe('TasksHistoryController', () => {
  let controller: TasksHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksHistoryController],
    }).compile();

    controller = module.get<TasksHistoryController>(TasksHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
