// glycemie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectureGlycemie } from './lecture-glycemie.model';

@Injectable({
  providedIn: 'root'
})
export class DiabeticServiceService {
  private apiUrl = 'http://localhost:8094/glycimie';

  constructor(private http: HttpClient) {}

  getLectures(): Observable<LectureGlycemie[]> {
    return this.http.get<LectureGlycemie[]>(`${this.apiUrl}/ShowInfo`);
  }
}
