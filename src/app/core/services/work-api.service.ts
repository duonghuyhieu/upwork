import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
import { work } from 'src/app/data/work';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkApiService {
  private apiUrl = 'https://641c0bbf1f5d999a446fd9bf.mockapi.io/api/work';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllWorks(): Observable<work[]> {
    return this.http.get<work[]>(this.apiUrl);
  }

  getWork(id: number): Observable<work> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<work>(url);
  }



}
