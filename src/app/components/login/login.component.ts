import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HTTPServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private httpService: HTTPServiceService) {}

  formGroup = new FormGroup({
    email: new FormControl('demo@dryad.net', [Validators.required]),
    password: new FormControl('password123', [Validators.required]),
  });

  credentialsOK: boolean = false;

  submitCredentials() {
    if (
      this.formGroup.value.email === 'demo@dryad.net' &&
      this.formGroup.value.password === 'password123'
    ) {
      this.credentialsOK = true;
      this.httpService.checkCredentials(this.formGroup.value);
    }
  }
}
