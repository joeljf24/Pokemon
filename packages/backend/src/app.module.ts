import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [MongodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
