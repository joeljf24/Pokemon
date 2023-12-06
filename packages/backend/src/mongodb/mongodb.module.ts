import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo/mongo.service';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/your-database-name'),
  ],
  providers: [MongoService],
})
export class MongodbModule {}
