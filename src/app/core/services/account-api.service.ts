import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../../data/account';
@Injectable({
  providedIn: 'root',
})
export class AccountApiService {
  private apiUrl = 'https://641c0bbf1f5d999a446fd9bf.mockapi.io/api/account';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  getAccount(id: number): Observable<Account> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Account>(url);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account, this.httpOptions);
  }
}
