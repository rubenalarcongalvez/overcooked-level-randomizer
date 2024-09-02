import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiAuthURL = 'http://localhost:8080/api/auth/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  login(username: string, password: string): Observable<string> {
    return this.httpClient.post<string>(
      `${this.apiAuthURL}login`,
      { username, password },
      this.httpOptions
    );
  }

  logout(): void {
    this.storageService.clean();
    window.location.replace('');
  }
}
