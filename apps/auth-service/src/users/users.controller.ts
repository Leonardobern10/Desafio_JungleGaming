import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dto/register.dto';

/**
 * Controller para operações relacionadas a usuários.
 */
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Endpoint para registrar um novo usuário.
   * @param {RegisterDto} body - Dados do usuário (nome, email, senha).
   * @returns {Promise<UserEntity>} Usuário criado.
   */
  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.usersService.create(body.name, body.email, body.password);
  }
}
