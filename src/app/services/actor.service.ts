import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private baseUrl = 'http://localhost:8080/api/actors';

  constructor(private http: HttpClient) {}

  // Получить всех актёров
  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.baseUrl);
  }

  // Получить актёра по ID
  getActorById(actorId: number): Observable<Actor> {
    const url = `${this.baseUrl}/${actorId}`;
    return this.http.get<Actor>(url);
  }

  // Создать нового актёра
  createActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.baseUrl, actor);
  }

  // Обновить данные актёра
  updateActor(actorId: number, actor: Actor): Observable<Actor> {
    const url = `${this.baseUrl}/${actorId}`;
    return this.http.put<Actor>(url, actor);
  }

  // Удалить актёра
  deleteActor(actorId: number): Observable<any> {
    const url = `${this.baseUrl}/${actorId}`;
    return this.http.delete(url);
  }
}
