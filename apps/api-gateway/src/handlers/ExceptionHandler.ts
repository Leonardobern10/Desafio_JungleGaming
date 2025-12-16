import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export default class ExceptionHandler {
  public static sendException(status: number, message: string) {
    switch (status) {
      case 401:
        throw new UnauthorizedException(message);
      case 404:
        throw new NotFoundException(message);
      case 400:
        throw new BadRequestException(message);
      case 500:
        throw new InternalServerErrorException(message);
      default:
        throw new InternalServerErrorException('Error on processing request.');
    }
  }
}
