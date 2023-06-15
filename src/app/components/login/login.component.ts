import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HTTPServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private httpService: HTTPServiceService) {}

  formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  credentialsOK: boolean = false;

  submitCredentials() {
    console.log(this.formGroup.value);

    if (
      this.formGroup.value.email === 'demo@dryad.net' &&
      this.formGroup.value.password === 'password123'
    ) {
      this.credentialsOK = true;
      this.httpService.checkCredentials(this.formGroup.value);
    }
  }
}
