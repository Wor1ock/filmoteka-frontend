import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies(); // Вызываем метод загрузки фильмов при инициализации компонента
  }

  // Метод для загрузки списка фильмов из сервиса
  loadMovies(): void {
    this.movieService.getAllMovies().subscribe(
      movies => {
        this.movies = movies;
      },
      error => {
        console.error('Failed to load movies:', error);
      }
    );
  }
}
