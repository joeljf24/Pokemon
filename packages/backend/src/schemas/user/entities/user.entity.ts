import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Pokemon, PokemonSchema } from "../../pokemon/entities/pokemon.entity"; // Import the Pokemon schema

@Schema()
export class User extends Document {
    @Prop({ unique: true, index: true })
    email: string;

    @Prop({ unique: true, index: true })
    username: string;

    @Prop()
    password: string;

    @Prop()
    isActive: boolean;

    @Prop([{ type: PokemonSchema }])
    pokemons: Pokemon[];
}

export const UserSchema = SchemaFactory.createForClass(User);
