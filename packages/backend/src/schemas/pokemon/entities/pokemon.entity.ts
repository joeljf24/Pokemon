import { IsString, IsInt, IsOptional, IsMongoId, IsNotEmpty, IsPositive, MinLength, IsNumber } from 'class-validator';
import { UUID } from 'crypto';

export class CreatePokemonDto {
    
    @IsMongoId()
    _id: UUID;

    @IsInt({ each: true }) // Apply the validation to each element in the array
    @IsNotEmpty()
    @IsPositive()
    @MinLength(1)
    id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsOptional()
    @IsString()
    evolution: string;

    @IsString()
    gender: string;

    @IsString()
    nature: string;

    @IsOptional()
    @IsNumber() // Change to IsNumber for numeric values
    height: number;

    @IsOptional()
    @IsNumber() // Change to IsNumber for numeric values
    weight: number;
}
