import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Director } from '../models/director.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movie);
  }

  deleteMovie(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  editMovie(movieId: number, updatedMovieData: any): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/${movieId}`, updatedMovieData);
  }
}
