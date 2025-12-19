import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Task } from '../tasks/entities/task.entity';
import CreateResponse from 'src/utils/response.utils';
import { ClientProxy } from '@nestjs/microservices';

/**
 * Serviço responsável pelas regras de negócio relacionadas a comentários.
 *
 * Inclui criação, listagem paginada e remoção de comentários,
 * além da comunicação com o microserviço de notificações.
 */
@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepo: Repository<Comment>,

    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>,

    @Inject('NOTIFICATIONS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  /**
   * Cria um comentário associado a uma task e emite evento de notificação.
   *
   * @param taskId - Identificador da task
   * @param dto - DTO contendo o texto do comentário
   * @param author - Email do autor
   * @throws NotFoundException - Caso a task não exista
   * @returns Comentário persistido
   */
  async create(taskId: string, text: string, author: string) {
    const task = await this.tasksRepo.findOne({ where: { id: taskId } });
    if (!task) throw new NotFoundException('Task não encontrada');

    const comment = this.commentsRepo.create({
      text: text,
      author: author,
      task: task,
    });

    console.log(comment);
    const saved = await this.commentsRepo.save(comment);

    // Emite evento para o microserviço de notificações
    this.client.emit('comment.new', {
      id: saved.id,
      text: saved.text,
      author: saved.author,
      taskId: task.id,
      taskTitle: task.title,
      assignedEmails: task.assignedEmails ?? [],
      createdAt: saved.createdAt,
    });
    return saved;
  }

  /**
   * Retorna comentários paginados de uma task específica.
   *
   * @param taskId - Identificador da task
   * @param page - Página atual
   * @param limit - Quantidade de registros por página
   * @throws NotFoundException - Caso a task não exista
   * @returns Resposta paginada contendo comentários
   */
  async findByTask(taskId: string, page: string, limit: string) {
    const task = await this.tasksRepo.findOne({ where: { id: taskId } });
    if (!task) throw new NotFoundException('Task não encontrada');

    return new CreateResponse<Comment>().createFullResponse(
      { page: page, limit: limit },
      this.commentsRepo,
      undefined,
      { task: { id: taskId } },
    );
  }

  /**
   * Remove um comentário existente.
   *
   * @param commentId - Identificador do comentário
   * @throws NotFoundException - Caso o comentário não exista
   * @returns Mensagem de confirmação
   */
  async remove(commentId: string) {
    const comment = await this.commentsRepo.findOne({
      where: { id: commentId },
    });
    if (!comment) throw new NotFoundException('Comentário não encontrado');

    await this.commentsRepo.remove(comment);
    return { message: 'Comentário removido com sucesso' };
  }
}
