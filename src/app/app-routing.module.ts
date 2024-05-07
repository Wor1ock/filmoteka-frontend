import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { DirectorListComponent } from './components/director-list/director-list.component';
import { CreateMovieFormComponent } from './components/create-movie-form/create-movie-form.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:movieId', component: MovieDetailsComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'directors', component: DirectorListComponent },
  { path: 'create-movie', component: CreateMovieFormComponent },
  { path: 'movie-edit/:movieId', component: MovieEditComponent },
  { path: '**', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
