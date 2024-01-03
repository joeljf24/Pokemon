import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Auth } from '../user/decorators';
import { ValidRoles } from '../user/interfaces';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }
  
  //data, porque me puede traer el nombre, id o el no
  @Get(':data')
  findOne(@Param('data') data: string) {
    return this.pokemonService.findOne(data);
  }
  
  @Auth(ValidRoles.user) //solo los usuarios pueden crear, modificar y borrar pokemons
  @Patch(':data') 
  update(@Param('data') data: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(data, updatePokemonDto);
  }
  
  @Auth(ValidRoles.user)
  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }

  @Auth(ValidRoles.user)
  @Post('create')
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }
}
