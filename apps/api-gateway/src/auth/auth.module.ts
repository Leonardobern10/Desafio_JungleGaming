import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { JwtStrategy } from 'src/jwt/jwt.strategy';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: config.get<string>('AUTH_HOST'),
            port: Number(config.get('AUTH_PORT')),
          },
        }),
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [JwtAuthGuard, JwtStrategy],
})
export class AuthModule {}
