import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Definimos la estructura de la respuesta
export interface IBaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, IBaseResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IBaseResponse<T>> {
    
    // next.handle() es el stream que contiene la respuesta del controlador
    return next.handle().pipe(
      map(data => ({
        success: true,
        message: 'Success', // Puedes personalizar esto
        data: data,
      })),
    );
  }
}