/**
 * Estrutura de metadados utilizada em respostas paginadas.
 */
export type MetaResponse = {
  /**
   * Página atual retornada.
   */
  currentPage: number;

  /**
   * Quantidade de itens por página.
   */
  limit: number;

  /**
   * Total de registros encontrados.
   */
  total: number;

  /**
   * Total de páginas calculadas.
   */
  totalPages: number;
};

/**
 * DTO genérico para respostas paginadas.
 *
 * @template T - Tipo da entidade retornada
 */
export class ResponsePaginatedDto<T> {
  /**
   * Lista de dados retornados.
   */
  public readonly data: Array<T>;

  /**
   * Metadados da paginação.
   */
  public readonly meta: MetaResponse;

  /**
   * Cria uma resposta paginada padronizada.
   *
   * @param data - Lista de dados
   * @param currentPage - Página atual
   * @param limit - Quantidade de itens por página
   * @param total - Total de registros
   * @param totalPages - Total de páginas
   */
  constructor(
    data: Array<T>,
    currentPage: number,
    limit: number,
    total: number,
    totalPages: number,
  ) {
    this.data = data;
    this.meta = {
      currentPage,
      limit,
      total,
      totalPages,
    };
  }
}
