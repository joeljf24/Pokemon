import { IsString, IsInt, IsOptional, IsMongoId, IsNotEmpty, IsPositive, MinLength } from 'class-validator';
import { UUID } from 'crypto';
import { User } from 'src/schemas/user/entities/user.entity';

export class CreatePokemonDto {
    
    @IsMongoId()
    _id: UUID

    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @MinLength(1)
    id: number

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsNotEmpty()
    @IsString()
    image: string

    @IsOptional()
    @IsString()
    evolution: string

    @IsString()
    gender: string

    @IsString()
    nature: string

    @IsOptional()
    height: number

    @IsOptional()
    weight: number

    @IsOptional()
    owner: User
}
