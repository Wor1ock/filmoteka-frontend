import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { DirectorService } from '../../services/director.service';
import { ActorService } from '../../services/actor.service';
import { Director } from '../../models/director.model';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-create-movie-form',
  templateUrl: './create-movie-form.component.html',
  styleUrls: ['./create-movie-form.component.css']
})
export class CreateMovieFormComponent implements OnInit {
  movieForm!: FormGroup;
  directors: Director[] = [];
  actors: Actor[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private movieService: MovieService, 
    private directorService: DirectorService, 
    private actorService: ActorService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  onSubmit(): void {
    if (this.movieForm.invalid) {
      return;
    }
    console.log(this.movieForm.value);
    this.movieService.addMovie(this.movieForm.value).subscribe(
      () => {
        console.log('Movie added successfully');
        this.router.navigate(['/movies']);
      },
      error => console.error('Error adding movie:', error)
    );
  }
}
