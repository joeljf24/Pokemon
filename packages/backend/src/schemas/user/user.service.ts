import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

// import { JwtService } from '@nestjs/jwt';
// import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,


    // private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {

    try {
      
      const { password, ...userData } = createUserDto;

      const validationErrors = await validate(createUserDto);

        if (validationErrors.length > 0) {
          throw new BadRequestException(validationErrors.map(error => Object.values(error.constraints)).join(', '));
        }


      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = await this.userModel.create({
        ...userData,
        password: hashedPassword,
      });

      const savedUser = await user.save();
      const { password: _, ...userWithoutPassword } = savedUser.toObject();

      // return {
      //   ...userWithoutPassword,
      //   token: this.getJwtToken({ id: savedUser.id }),
      // };

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

  private handleDBErrors(error: any): never {

    if (error.response && error.response.message && error.response.message instanceof Array) {
      throw new BadRequestException(error.response.message.join(', '));
    }
    if (error.code === 11000) {
      throw new BadRequestException('Email or username already exists.');
    }

    console.error(error);

    throw new InternalServerErrorException('Please check server logs');
}
  // async login(loginUserDto: LoginUserDto) {

  //   const { password, email } = loginUserDto;

  //   const user = await this.userModel.findOne({
  //     email,
  //   }).select('email password id');
  
  //   if (!user)
  //     throw new UnauthorizedException('Credentials are not valid (email)');

  //   if (!bcrypt.compareSync(password, user.password))
  //     throw new UnauthorizedException('Credentials are not valid (password)');

  //   const { password: _, ...userWithoutPassword } = user.toObject();

  //   return {
  //     ...userWithoutPassword,
  //     token: this.getJwtToken({ id: user.id }),
  //   };
  // }

  async checkAuthStatus(user: User) {

    const { password: _, ...userWithoutPassword } = user.toObject();

    // return {
    //   ...userWithoutPassword,
    //   token: this.getJwtToken({ id: user.id }),
    // };

  }

  // private getJwtToken(payload: JwtPayload) {

  //   const token = this.jwtService.sign(payload);
  //   return token;

  // }


}


