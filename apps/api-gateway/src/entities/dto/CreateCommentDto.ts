import { IsEmail, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text: string;

  @IsUUID()
  authorId: string;

  @IsString()
  @IsEmail()
  authorEmail: string;
}
