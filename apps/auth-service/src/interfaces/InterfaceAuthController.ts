import { LoginDto } from 'src/auth/dto/login.dto';
import { RefreshDto } from 'src/auth/dto/refresh.dto';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { ResponseAuthLogin } from 'src/types/ResponseAuthLogin';
import { ResponseAuthLogout } from 'src/types/ResponseAuthLogout';
import { ResponseAuthRefresh } from 'src/types/ResponseAuthRefresh';
import { UserEntity } from 'src/users/user.entity';

/**
 * Interface que define os métodos que um controller de autenticação deve implementar.
 */
export interface InterfaceAuthController {
  /**
   * Realiza login de um usuário.
   * @param {LoginDto} data - Dados de login (email e senha).
   * @returns {Promise<ResponseAuthLogin>} Tokens de acesso e refresh + dados do usuário.
   */
  login(data: LoginDto): Promise<ResponseAuthLogin>;

  /**
   * Atualiza o access token utilizando o refresh token.
   * @param {RefreshDto} data - Objeto contendo refresh token.
   * @returns {Promise<ResponseAuthRefresh>} Novo access token e refresh token.
   */
  refresh(data: RefreshDto): Promise<ResponseAuthRefresh>;

  /**
   * Realiza logout do usuário.
   * @param {string} userId - ID do usuário.
   * @returns {Promise<ResponseAuthLogout>} Mensagem de logout.
   */
  logout(userId: string): Promise<ResponseAuthLogout>;

  /**
   * Cadastra um novo usuário.
   * @param {RegisterDto} data - Dados do usuário (nome, email e senha).
   * @returns {Promise<UserEntity>} Usuário criado.
   */
  register(data: RegisterDto): Promise<UserEntity>;

  /**
   * Valida se um email já existe no sistema.
   * @param {string} email - Email a ser verificado.
   * @returns {Promise<boolean>} True se o email já existe, false caso contrário.
   */
  validateUser(email: string): Promise<boolean>;

  /**
   * Retorna todos os usuários cadastrados.
   * @returns {Promise<UserEntity[]>} Lista de usuários.
   */
  getAllUsers(): Promise<UserEntity[]>;
}
