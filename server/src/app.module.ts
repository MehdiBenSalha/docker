import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CoffeeModule,
  ],
})
export class AppModule {}
