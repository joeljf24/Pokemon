import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  imports: [

    ConfigModule,

    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),

    PassportModule.register({ defaultStrategy: 'jwt' }),
    
    JwtModule.registerAsync({
      imports:[ ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => {
      
        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: '2h',
          }
        }
    }
    }),
  ],
  exports: [JwtStrategy, PassportModule, JwtModule]
})
export class UserModule {}
