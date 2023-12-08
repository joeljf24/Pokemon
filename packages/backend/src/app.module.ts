import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MongodbModule, PrismaModule]
})
export class AppModule {}
