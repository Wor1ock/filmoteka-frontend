import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  
  carouselPhotos: { url: string, alt: string }[] = [
    { url: '/assets/images/1.jpg', alt: 'Image 1' },
    { url: '/assets/images/2.jpg', alt: 'Image 2' },
    { url: '/assets/images/3.jpg', alt: 'Image 3' }
];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getAllMovies()
      .subscribe(movies => this.movies = movies);
  }

  viewMovieDetails(movieId: number): void {
    if(!movieId) {
      alert(movieId);
    }
    this.router.navigate(['/movie', movieId]);
  }

  deleteMovie(movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe(
      () => {
        this.movies = this.movies.filter(movie => movie.movieId !== movieId);
        console.log('Movie deleted successfully');
      },
      error => console.error('Error deleting movie:', error)
    );
  }

  editMovie(movieId: number) {
    console.log('Editing movie with ID:', movieId);
    this.router.navigate(['/movie-edit', movieId]);
  }

  createMoviePage(): void {
    this.router.navigate(['/create-movie']);
  }
}
