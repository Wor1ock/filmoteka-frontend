import { Movie } from './movie.model';

export interface Director {
  directorId: number;
  directorName: string;
  bio?: string;
  movies?: Movie[];
}