import { IsEmail, IsString, MinLength, MaxLength, Matches, IsOptional, IsArray, IsNotEmpty } from "class-validator";

export class LoginUserDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: 'Email should not be empty' })
    email: string;


    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        { message: 'The password must have an Uppercase, lowercase letter, and a number' }
    )
    password: string;
}