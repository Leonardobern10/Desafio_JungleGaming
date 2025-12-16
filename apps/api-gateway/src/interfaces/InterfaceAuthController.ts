import { Response, Request } from 'express';
import { LoginDto } from 'src/entities/dto/LoginDto';
import { RegisterDto } from 'src/entities/dto/RegisterDto';
import { UserEntity } from 'src/entities/UserEntity';
import { AuthRequest, ExpressUser } from 'src/types/ExpressUser';
import {
  ResponseAuthController,
  ResponseLogout,
  ResponseRefresh,
} from 'src/types/ResponsesAuthGateway';

/**
 * Interface para o AuthController, definindo métodos que um controlador de autenticação deve implementar.
 */
export interface InterfaceAuthController {
  /**
   * Autentica um usuário e retorna tokens de acesso e refresh.
   * @param {LoginDto} body - DTO com email e senha do usuário.
   * @param {Response} res - Objeto Response do Express para setar cookies.
   * @returns {Promise<ResponseAuthController>} Retorna objeto contendo access_token e dados do usuário.
   */
  login(body: LoginDto, res: Response): Promise<ResponseAuthController | void>;

  /**
   * Registra um novo usuário no sistema.
   * @param {RegisterDto} dto - DTO com os dados do novo usuário.
   * @returns {Promise<UserEntity>} Retorna a entidade do usuário criado.
   */
  register(dto: RegisterDto): Promise<UserEntity>;

  /**
   * Retorna o perfil do usuário autenticado.
   * @param {Request} req - Objeto Request do Express contendo o usuário autenticado.
   * @returns {Promise<ExpressUser>} Retorna os dados do usuário autenticado.
   */
  getProfile(req: Request): Promise<ExpressUser>;

  /**
   * Gera um novo access token utilizando o refresh token.
   * @param {Request} req - Objeto Request contendo o cookie com refresh token.
   * @param {Response} res - Objeto Response do Express para setar novo cookie.
   * @returns {Promise<ResponseRefresh | Response>} Retorna o novo access token.
   */
  refresh(req: Request, res: Response): Promise<ResponseRefresh | Response>;

  /**
   * Faz logout do usuário, removendo refresh token e cookies.
   * @param {AuthRequest} req - Objeto Request com o usuário autenticado.
   * @param {Response} res - Objeto Response do Express para limpar cookie.
   * @returns {Promise<ResponseLogout>} Retorna mensagem de logout realizado com sucesso.
   */
  logout(req: AuthRequest, res: Response): Promise<ResponseLogout>;

  /**
   * Retorna todos os usuários do sistema.
   * @param {any} req - Objeto Request contendo o usuário autenticado.
   * @param {Response} res - Objeto Response do Express.
   * @returns {Promise<UserEntity[]>} Retorna lista de usuários.
   */
  getAllUsers(req: any, res: Response): Promise<UserEntity[]>;
}
