import api from "@/lib/api";
import type { CreateTaskSchemaType } from "@/schema/CreateTaskSchema";
import type { UpdateTaskSchemaType } from "@/schema/UpdateTaskSchema";
import type { PriorityTaskType } from "@/types/PriorityTaskType";
import type { StatusTaskType } from "@/types/StatusTaskType";
import type { TaskItem } from "@/types/TaskItem";

const pageDefault = 1;
const limitDefault = 10;

/**
 *
 * A função é responsável por Constrói dinamicamente a URL de paginação + filtro.
 *
 * @param page Valor da pagina atual.
 * @param limit Quantidade de elementos buscados por pagina.
 * @param query Nome da query que corresponde ao valor.
 * @param value Valor a ser enviado na requisição.
 * @returns A URL correta e montada para a requisição.
 */
const buildPaginatedQuery = (
  page?: number,
  limit?: number,
  query?: string,
  value?: string | number
) => {
  const pageDefault = 1;
  const limitDefault = 10;

  const base = `/tasks?page=${page ?? pageDefault}&limit=${
    limit ?? limitDefault
  }`;

  return query ? `${base}&${query}=${value}` : base;
};

export const fetchTasks = async (page = pageDefault, limit = limitDefault) => {
  const response = await api.get(buildPaginatedQuery(page, limit));
  return {
    data: response.data.data,
    meta: response.data.meta, // totalPages, totalItems, currentPage etc.
  };
};

export const fetchTaskByPriority = async (
  priority: PriorityTaskType,
  page = pageDefault,
  limit = limitDefault
) => {
  const response = await api.get(
    buildPaginatedQuery(page, limit, "priority", priority)
  );
  return {
    data: response.data.data,
    meta: response.data.meta, // totalPages, totalItems, currentPage etc.
  };
};

export const fetchTaskByTitle = async (
  title: string,
  page = pageDefault,
  limit = limitDefault
) => {
  const response = await api.get(
    buildPaginatedQuery(page, limit, "title", title)
  );
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};

export const fetchTaskByStatus = async (
  status: StatusTaskType,
  page = pageDefault,
  limit = limitDefault
) => {
  const response = await api.get(
    buildPaginatedQuery(page, limit, "status", status)
  );
  return response.data.data;
};

export const fetchTaskById = async (id: string): Promise<TaskItem | null> => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

export const saveTask = async (data: CreateTaskSchemaType) => {
  const response = await api.post(`/tasks`, data);
  return response.data;
};

export const updateTask = async (id: string, data: UpdateTaskSchemaType) => {
  const response = await api.patch(`/tasks/${id}`, data);
  return response.data;
};
