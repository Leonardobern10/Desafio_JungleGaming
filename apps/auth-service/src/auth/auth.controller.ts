import { Controller, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterDto } from './dto/register.dto';
import { InterfaceAuthController } from 'src/interfaces/InterfaceAuthController';

/**
 * Controller de autenticação responsável por expor métodos via microservice.
 * Implementa InterfaceAuthController.
 */
@Controller()
export class AuthController implements InterfaceAuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Autentica um usuário com email e senha.
   * @param {LoginDto} data - Dados de login do usuário.
   * @returns {Promise<any>} Retorna tokens de acesso e refresh e dados do usuário.
   */
  @MessagePattern('auth.login')
  login(@Payload() data: LoginDto) {
    return this.authService.login(data.email, data.password);
  }

  /**
   * Atualiza o access token usando o refresh token.
   * @param {RefreshDto} data - Objeto contendo refresh token.
   * @returns {Promise<any>} Retorna um novo access token e refresh token.
   */
  @MessagePattern('auth.refresh')
  async refresh(@Payload() data: RefreshDto) {
    return this.authService.refresh(data);
  }

  /**
   * Realiza logout do usuário removendo seu refresh token.
   * @param {string} userId - ID do usuário.
   * @returns {Promise<any>} Retorna mensagem de logout.
   */
  @MessagePattern('auth.logout')
  async logout(@Payload() userId: string) {
    return this.authService.logout(userId);
  }

  /**
   * Cria um novo usuário.
   * @param {RegisterDto} data - Dados do usuário para cadastro.
   * @returns {Promise<any>} Retorna o usuário criado.
   */
  @MessagePattern('auth.register')
  async register(@Payload() data: RegisterDto) {
    return this.authService.create(data);
  }

  /**
   * Valida se um email está disponível para cadastro.
   * @param {string} email - Email a ser validado.
   * @returns {Promise<boolean>} Retorna true se o email estiver disponível.
   */
  @MessagePattern('auth.validateUser')
  async validateUser(@Payload() email: string) {
    return this.authService.validateEmail(email);
  }

  /**
   * Retorna todos os usuários cadastrados.
   * @returns {Promise<any[]>} Lista de usuários.
   */
  @MessagePattern('auth.allUsers')
  async getAllUsers() {
    return this.authService.getAll();
  }
}
