// import { join } from 'path'; // en Node
// import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname,'..','public'), 
    // }),

    MongooseModule.forRoot('mongodb+srv://paula:8hlHVRpbcYiENnki@pokemon.3rjmgrg.mongodb.net/Pokemon?retryWrites=true&w=majority'),

    PokemonModule,

    UserModule,

  ]
})

export class AppModule {}