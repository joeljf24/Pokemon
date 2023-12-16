import { IsString, IsInt, IsOptional, IsMongoId, IsNotEmpty, IsPositive, MinLength } from 'class-validator';
import { UUID } from 'crypto';

export class CreatePokemonDto {
    
    @IsMongoId()
    _id: UUID

    @IsInt()
    @IsNotEmpty()
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
}
