import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

/**
 * Controller responsável pelo gerenciamento de comentários via mensageria.
 *
 * Este controller escuta eventos recebidos por microserviços e delega
 * as operações ao CommentsService.
 */
@Controller()
export class CommentsController {
  constructor(private readonly service: CommentsService) {}

  /**
   * Cria um novo comentário em uma task.
   *
   * Evento esperado: `comment.new`
   *
   * @param data - Dados necessários para criação do comentário
   * @param data.taskId - Identificador da task
   * @param data.dto - DTO contendo o texto do comentário
   * @param data.email - Email do autor do comentário
   * @returns Comentário criado
   */
  @MessagePattern('comment.new')
  create(
    @Payload() data: { taskId: string; dto: CreateCommentDto; email: string },
  ) {
    return this.service.create(data.taskId, data.dto, data.email);
  }

  /**
   * Busca comentários paginados associados a uma task.
   *
   * Evento esperado: `comments.findByTask`
   *
   * @param data - Dados de busca
   * @param data.taskId - Identificador da task
   * @param data.page - Página atual
   * @param data.limit - Quantidade de registros por página
   * @returns Lista paginada de comentários
   */
  @MessagePattern('comments.findByTask')
  findByTask(@Payload() data: { taskId: string; page: string; limit: string }) {
    return this.service.findByTask(data.taskId, data.page, data.limit);
  }

  /**
   * Remove um comentário existente.
   *
   * Evento esperado: `comments.remove`
   *
   * @param commentId - Identificador do comentário
   * @returns Mensagem de sucesso
   */
  @MessagePattern('comments.remove')
  remove(@Payload() commentId: string) {
    return this.service.remove(commentId);
  }
}
