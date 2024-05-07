import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-actors',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.loadActors();
  }

  loadActors() {
    this.actorService.getActors().subscribe(
      (actors: any[]) => {
        this.actors = actors;
      },
      (error) => {
        console.error('Ошибка при загрузке актёров:', error);
      }
    );
  }
}