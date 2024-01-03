import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as autoIncrement from 'mongoose-auto-increment';

@Schema()
export class Pokemon extends Document {
    @Prop({ unique: true, index: true, auto: true})
    no: number;

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

PokemonSchema.plugin(autoIncrement.plugin, { model: 'Pokemon', field: 'no', startAt: 1, incrementBy: 1 });