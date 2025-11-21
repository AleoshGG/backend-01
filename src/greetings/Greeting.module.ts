import { Module } from '@nestjs/common';
import { GreetingController } from './controllers/Greeting.controller';
import { GreetingRepositoryAdapter } from './data/repositories/GreetingRepositoryAdapter';
import { GreetingService } from './services/Greeting.service';

@Module({
  imports: [],
  controllers: [GreetingController],
  providers: [GreetingRepositoryAdapter, GreetingService],
  exports: [GreetingService],
})
export class GreetingModule {}
