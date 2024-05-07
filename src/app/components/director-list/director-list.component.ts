import { Component, OnInit } from '@angular/core';
import { Director } from '../../models/director.model';
import { DirectorService } from '../../services/director.service';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.css']
})
export class DirectorListComponent implements OnInit {
  directors: Director[] = [];

  constructor(private directorService: DirectorService) { }

  ngOnInit(): void {
    this.getDirectors();
  }

  getDirectors(): void {
    this.directorService.getDirectors().subscribe(
      directors => this.directors = directors,
      error => console.error('Error loading directors:', error)
    );
  }
}
