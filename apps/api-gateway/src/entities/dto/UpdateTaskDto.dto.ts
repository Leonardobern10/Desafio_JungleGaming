import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './CreateTaskDto.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
