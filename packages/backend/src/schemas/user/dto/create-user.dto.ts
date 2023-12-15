import { IsEmail, IsString, MinLength, MaxLength, Matches, IsOptional } from "class-validator";
import { Pokemon } from "src/schemas/pokemon/entities/pokemon.entity";

export class CreateUserDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(3)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsOptional()
    pokemons: Pokemon

}
