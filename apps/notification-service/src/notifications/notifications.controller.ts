import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';

/**
 * Controller para eventos de notificações.
 * Escuta eventos do sistema (tasks e comments) e envia para o serviço de notificações.
 */
@Controller()
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  /**
   * Trata evento de criação de task.
   * @param {any} data - Dados do evento (task criada).
   */
  @EventPattern('tasks.created')
  async handleTaskCreated(@Payload() data: any) {
    await this.service.processEvent('tasks.created', data);
  }

  /**
   * Trata evento de atualização de task.
   * @param {any} data - Dados do evento (task atualizada).
   */
  @EventPattern('tasks.updated')
  async handleTaskUpdated(@Payload() data: any) {
    await this.service.processEvent('tasks.updated', data);
  }

  /**
   * Trata evento de novo comentário em task.
   * @param {any} data - Dados do comentário criado.
   */
  @EventPattern('comment.new')
  async handleTaskCommented(@Payload() data: any) {
    await this.service.processEvent('comment.new', data);
  }

  /**
   * Trata evento de task atribuída a usuários.
   * @param {any} data - Dados do evento de atribuição.
   */
  @EventPattern('tasks.assigned')
  async handleTaskAssigned(@Payload() data: any) {
    await this.service.processEvent('tasks.assigned', data);
  }
}
