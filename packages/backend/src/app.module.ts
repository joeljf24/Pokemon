import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MongodbModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
