import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GreetingModule } from './greetings/Greeting.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GreetingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
