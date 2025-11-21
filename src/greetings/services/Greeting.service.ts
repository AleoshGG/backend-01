import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { GreetingRepositoryAdapter } from '../data/repositories/GreetingRepositoryAdapter';
import type { IGreetingRepository } from '../domain/repositories/IGreetingRepository';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GreetingService {
  constructor(
    @Inject(GreetingRepositoryAdapter)
    private readonly greetingRepo: IGreetingRepository,
  ) {}

  async greet() {
    try {
      return await this.greetingRepo.greet();
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
      });
    }
  }
}
