import { Director } from './director.model';
import { Actor } from './actor.model';

export interface Movie {
  movieId: number;
  title: string;
  releaseYear: number;
  worldwideGross: number;
  duration: number;
  director: Director;
  actors: Actor[];
}