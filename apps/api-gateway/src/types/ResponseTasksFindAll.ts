import { Task } from 'src/entities/Task';

export type ResponseTasksFindAll = {
  data: Task[];
  meta: {
    page: string | number | undefined;
    limit: string | number | undefined;
    totalItems: number;
    totalPages: number;
  };
};
