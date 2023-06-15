import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPServiceService {
  constructor(private http: HttpClient) {}

  postUri = 'https://db.staging.dryad.app/auth/login';
  getUri = 'https://db.staging.dryad.app/items/sensor_node';

  token = new BehaviorSubject('');

  checkCredentials(credentials: any) {
    this.http.post(this.postUri, credentials).subscribe((response: any) => {
      console.log(response);
      this.token = response.data.access_token;
    });
  }
}
