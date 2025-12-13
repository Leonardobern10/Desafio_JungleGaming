import { ResponsePaginatedDto } from 'src/utils/response-paginated.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { PaginationDto } from './pagination.dto';

/**
 * Classe utilitária responsável por criar respostas paginadas
 * de forma padronizada a partir de repositórios TypeORM.
 *
 * @template T - Tipo da entidade do repositório
 */
export default class CreateResponse<T extends ObjectLiteral> {
  /**
   * Cria uma resposta paginada simples a partir de dados já obtidos.
   *
   * @param data - Lista de registros
   * @param currentPage - Página atual
   * @param limit - Quantidade de itens por página
   * @param total - Total de registros encontrados
   * @returns Resposta paginada padronizada
   */
  createResponse(
    data: Array<T>,
    currentPage: number,
    limit: number,
    total: number,
  ): ResponsePaginatedDto<T> {
    return new ResponsePaginatedDto(
      data,
      currentPage,
      limit,
      total,
      Math.max(Math.ceil(total / limit), 1),
    );
  }

  /**
   * Cria uma resposta paginada completa diretamente a partir
   * de um repositório TypeORM.
   *
   * Este método:
   * - Normaliza valores de página e limite
   * - Aplica paginação via `take` e `skip`
   * - Permite filtros e relacionamentos
   *
   * @param payload - DTO de paginação
   * @param repo - Repositório TypeORM
   * @param relations - Relações a serem carregadas
   * @param where - Condições de filtro
   * @param title - Flag reservada para futuras extensões
   *
   * @returns Resposta paginada padronizada
   */
  async createFullResponse(
    payload: PaginationDto,
    repo: Repository<T>,
    relations?: string[],
    where?: any,
    title: boolean = false,
  ): Promise<ResponsePaginatedDto<T>> {
    const pageCurrent = Math.max(Number(payload.page) || 1, 1);
    const quantityCurrent = Math.max(Number(payload.limit) || 10, 1);

    const skip = (pageCurrent - 1) * quantityCurrent;

    const [data, countData] = await repo.findAndCount({
      take: quantityCurrent,
      skip,
      relations: relations ?? [],
      where,
    });

    return this.createResponse(data, pageCurrent, quantityCurrent, countData);
  }
}
