import { Task } from 'src/entities/Task';

type Meta = {
  page: string | number | undefined;
  limit: string | number | undefined;
  totalItems: number;
  totalPages: number;
};

export type ResponseTasksFindAll = {
  data: Task[];
  meta: Meta;
};
