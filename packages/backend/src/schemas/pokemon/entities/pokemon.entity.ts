import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {
    @Prop({ unique: true, index: true})
    id: number;

    @Prop({ unique: true, index: true })
    name: string;

    @Prop()
    image: string;

    @Prop()
    evolution: string;

    @Prop()
    gender: string;

    @Prop()
    nature: string;

    @Prop()
    height: number;

    @Prop()
    weight: number;

    @Prop([String])
    moves: string[];

    @Prop([String])
    types: string[];

    // @Prop({ type: 'ObjectId', ref: 'User' })
    // owner: string[];
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);