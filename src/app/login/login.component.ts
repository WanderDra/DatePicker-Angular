import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAPIService } from '../data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorList: { required?: boolean } = {};
  info: string = '';

  constructor(private fb: FormBuilder, private dataAPI: DataAPIService, asyncValidator: CustomAsyncValidator) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }, { asyncValidators: asyncValidator.validate })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    this.errorList = { ...username?.errors, ...password?.errors };

    if (this.errorList.required) {
      this.info = `Username or Password is REQUIRED`;
    } else {


      if (this.loginForm.errors) {
        console.log(this.loginForm.errors);

        if (this.loginForm.errors['auth'] === false) {
          this.info = `username or password is invalid`
        } else {
          this.info = `
          username: ${username?.value}
          password: ${password?.value}
        `;
        }
      }
    }

  }
}

@Injectable({
  providedIn: 'root'
})
export class CustomAsyncValidator implements AsyncValidator {

  constructor(private dataAPI: DataAPIService) { }

  validate = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return this.dataAPI.auth(control.get('username')?.value, control.get('password')?.value).pipe(
      map(data => {
        return { auth: data };
      })
    )
  }

}
