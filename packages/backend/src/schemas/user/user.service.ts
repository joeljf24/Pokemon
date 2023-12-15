import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

  constructor(
    @InjectModel( User.name)
    private readonly userModel: Model<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userModel.create({
        ...createUserDto,
        pokemons: [], // Inicializa el array de pokemons como vacío al crear el usuario
      });
  
      return user;
    } catch (error) {
      this.handleDBErros(error);
    }
  }
  

  private handleDBErros(error: any): never{
    if(error.code === '11000'){
      throw new BadRequestException(error.detail);
    }

    console.log(error);
    throw new InternalServerErrorException("Please check server logs");
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
