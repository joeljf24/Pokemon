import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto/index';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/index';
import { validate } from 'class-validator';
import { use } from 'passport';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    
    try {
      const { password, ...userData } = createUserDto;

      // const validationErrors = await validate(createUserDto);
      
      // if (validationErrors.length > 0) {
      //     throw new BadRequestException(validationErrors.map(error => Object.values(error.constraints)).join(', '));
      //   }

      const user = await this.userModel.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });

      // console.log(user);
      delete user.password;

      return {
        ...user,
        token: this.getJwtToken({ id: user.id }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  // async assignPokemonToUser(userId: string, pokemonId: string) {
  //   try {
  //     const user = await this.userModel.findByIdAndUpdate(
  //       userId,
  //       { new: true }
  //     );
  
  //     if (!user) {
  //       throw new NotFoundException(`User with ID ${userId} not found`);
  //     }
  
  //     return user;
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  

  private handleDBErrors(error: any): never {

    if (error.response ) {
      throw new BadRequestException(error.response.message.join(', '));
    }
    console.error(error);
    if (error.code === 11000) {
      throw new BadRequestException('Email or username already exists.');
    }


    throw new InternalServerErrorException('Please check server logs');
}

  async login(loginUserDto: LoginUserDto) {

    const { password, email } = loginUserDto;

    const user = await this.userModel.findOne({
      email,
    }).select('email password id');
  
    if (!user)
      throw new UnauthorizedException('Credentials are not valid (email)');

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credentials are not valid (password)');

    const { password: _, ...userWithoutPassword } = user.toObject();

    return {
      ...userWithoutPassword,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  async checkAuthStatus(user: User) {

    const { password: _, ...userWithoutPassword } = user.toObject();

    return {
      ...userWithoutPassword,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  private getJwtToken(payload: JwtPayload) {

    const token = this.jwtService.sign(payload);
    return token;

  }

}


