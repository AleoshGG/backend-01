import { Injectable } from '@nestjs/common';
import { Greeting } from 'src/greetings/domain/entities/Greeting';
import { IGreetingRepository } from 'src/greetings/domain/repositories/IGreetingRepository';

@Injectable()
export class GreetingRepositoryAdapter implements IGreetingRepository {
  async greet(): Promise<Greeting> {
    return {
      greeting: 'Hello world in API 1 with NestJs',
    };
  }
}
