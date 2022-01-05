import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PlayersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestmain', {
      autoCreate: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
