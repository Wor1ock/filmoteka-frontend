import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { DirectorListComponent } from './components/director-list/director-list.component';
import { CreateMovieFormComponent } from './components/create-movie-form/create-movie-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ActorListComponent,
    DirectorListComponent,
    CreateMovieFormComponent,
    CarouselComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
