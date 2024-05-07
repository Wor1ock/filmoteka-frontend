import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from '../models/director.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private apiUrl = 'http://localhost:8080/api/directors';

  constructor(private http: HttpClient) { }

  // Метод для загрузки всех режиссёров
  getDirectors(): Observable<Director[]> {
    return this.http.get<Director[]>(this.apiUrl);
  }
}
