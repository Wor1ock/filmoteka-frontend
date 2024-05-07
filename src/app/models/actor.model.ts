import { Movie } from './movie.model';

export interface Actor {
  actorId: number;
  actorName: string;
  birthdate?: Date;
  country?: string;
  bio?: string;
  movies?: Movie[];
}
