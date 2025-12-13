import { Comment } from 'src/comments/entities/comment.entity';
import { TaskHistory } from 'src/tasks-history/entities/task-history.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Task, TaskHistory, Comment],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // nunca use synchronize em produção
});
