import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { GreetingService } from '../services/Greeting.service';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptors';

@Controller('greetings')
@UseInterceptors(ResponseInterceptor)
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  @Get()
  async greet() {
    return await this.greetingService.greet();
  }
}
