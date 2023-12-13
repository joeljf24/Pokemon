import { join } from 'path'; // en Node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/pokemon'),

    PokemonModule,

    UserModule,

  ]
})

export class AppModule {}