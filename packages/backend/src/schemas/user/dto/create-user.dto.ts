import { IsEmail, IsString, MinLength, MaxLength, Matches, IsOptional, IsArray, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: 'Email should not be empty' })
    email: string;

    @IsString()
    @MinLength(3, { message: 'Username should be at least 3 characters long' })
    @IsNotEmpty({ message: 'Username should not be empty' })
    username: string;

    @IsString()
    @MinLength(8, { message: 'Password should be at least 8 characters long' })
    @MaxLength(50, { message: 'Password should not exceed 50 characters' })
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        { message: 'The password must have an Uppercase, lowercase letter, and a number' }
    )
    password: string;

    @IsOptional()
    @IsArray()
    pokemons: string[];
}
