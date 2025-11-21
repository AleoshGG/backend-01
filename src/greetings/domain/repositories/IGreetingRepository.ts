import { Greeting } from '../entities/Greeting';

export interface IGreetingRepository {
  greet(): Promise<Greeting>;
}
