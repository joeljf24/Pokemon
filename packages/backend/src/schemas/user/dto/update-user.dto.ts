import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // async assignPokemonToUser(userId: string, pokemonId: string) {
    //     try {
    //       const user = await this.userModel.findByIdAndUpdate(
    //         userId,
    //         { $push: { pokemons: pokemonId } },
    //         { new: true }
    //       );
      
    //       if (!user) {
    //         throw new NotFoundException(`User with ID ${userId} not found`);
    //       }
      
    //       return user;
    //     } catch (error) {
    //       this.handleDBErros(error);
    //     }
    //   }
      
}
