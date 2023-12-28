import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'users' })
export class User extends Document {
    @Prop({ unique: true, index: true })
    email: string;

    @Prop({ unique: true, index: true })
    username: string;

    @Prop()
    password: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop({ type: [{ type: String }], default: ['user'] })
    roles: string[];    
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase().trim();
    next();
})