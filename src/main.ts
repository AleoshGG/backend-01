import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('Service-Greeting');
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalFilters(new HttpExceptionFilter());

    const port = 8080;
    await app.listen(port, '0.0.0.0');
    logger.log(`Web server is running on http://localhost:${port}`);
  } catch (error) {
    logger.error('Error starting web server', error);
  }
}
bootstrap();
