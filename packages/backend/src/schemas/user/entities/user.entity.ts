import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users' })
export class User extends Document {
    
    @Prop({ type: String, unique: true })
    id: string;

    @Prop({ type: String, unique: true })
    email: string;

    @Prop({ type: String, select: false })
    password: string;

    @Prop({ type: String })
    userName: string;

    @Prop({ type: Boolean, default: true })
    isActive: boolean;

    // @Prop({ type: [String], default: ['user'] })
    // roles: string[];

    // @OneToMany(() => Product, (product) => product.user)
    // product: Product;

    // @BeforeInsert()
    // checkFieldsBeforeInsert() {
    //     this.email = this.email.toLowerCase().trim();
    // }

    // @BeforeUpdate()
    // checkFieldsBeforeUpdate() {
    //     this.checkFieldsBeforeInsert();
    // }
}

export const UserSchema = SchemaFactory.createForClass(User);
