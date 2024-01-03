// import { join } from 'path'; // en Node
// import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { PokemonModule } from './schemas/pokemon/pokemon.module';
import { UserModule } from './schemas/user/user.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname,'..','public'), 
    // }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@pokemon.3rjmgrg.mongodb.net/Pokemon?retryWrites=true&w=majority`),

    PokemonModule,

    UserModule,

    CommonModule,

  ]
})

export class AppModule {}