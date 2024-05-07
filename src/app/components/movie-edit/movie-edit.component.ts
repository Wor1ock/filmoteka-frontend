import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { DirectorService } from '../../services/director.service';
import { ActorService } from '../../services/actor.service';
import { Director } from '../../models/director.model';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movieForm: FormGroup;
  movieId!: number;
  directors: Director[] = [];
  actors: Actor[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private directorService: DirectorService,
    private actorService: ActorService
  ) {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      releaseYear: ['', Validators.required],
      worldwideGross: ['', Validators.required],
      duration: ['', Validators.required],
      director: [''],
      actors: [[]]
    });
    this.loadDirectors();
    this.loadActors();
  }

  loadDirectors() {
    this.directorService.getDirectors().subscribe(
      directors => {
        this.directors = directors;
      },
      error => {
        console.error('Error loading directors:', error);
      }
    );
  }

  loadActors() {
    this.actorService.getActors().subscribe(
      actors => {
        this.actors = actors;
      },
      error => {
        console.error('Error loading actors:', error);
      }
    );
  }
  
  
  ngOnInit(): void {
    const movieIdParam = this.route.snapshot.paramMap.get('movieId');
    this.movieId = movieIdParam ? +movieIdParam : 0;

    if (this.movieId !== 0) {
      this.loadMovie();
    } else {
      console.error('Movie ID is not provided.');
    }
  }

  loadMovie() {
    this.movieService.getMovieById(this.movieId).subscribe(
      movie => {
        this.movieForm.patchValue({
          title: movie.title,
          releaseYear: movie.releaseYear,
          worldwideGross: movie.worldwideGross,
          duration: movie.duration,
          director: movie.director,
          actors: movie.actors
        });
      },
      error => {
        console.error('Error loading movie:', error);
      }
    );
  }

  onSubmit() {
    if (this.movieForm.valid) {
      this.movieService.editMovie(this.movieId, this.movieForm.value).subscribe(
        updatedMovie => {
          console.log('Movie edited successfully:', updatedMovie);
          this.router.navigate(['/movie']);
        },
        error => {
          console.error('Error editing movie:', error);
        }
      );
    } else {
      console.error('Movie form is invalid.');
    }
  }
}
