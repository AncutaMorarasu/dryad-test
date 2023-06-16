import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  baseUrl = 'https://db.staging.dryad.app/';

  private token$ = new BehaviorSubject<string>('');
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  get token(): Observable<string> {
    return this.token$.asObservable();
  }
  setToken(value: string): void {
    this.token$.next(value);
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  setAuthenticated(value: boolean): void {
    this.isAuthenticated$.next(value);
  }


  checkCredentials(credentials: any): void {
    this.http
      .post(`${this.baseUrl}auth/login`, credentials)
      .pipe(
        catchError(() => {
          return throwError(() => new Error('bad credentials'));
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.setToken(response.data.access_token);          
          this.setAuthenticated(true);
          this.router.navigate(['/dashboard']);
        }
      });
  }

  getSensorItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}items/sensor_node`);
  }
}
