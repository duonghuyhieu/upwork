import { AccountApiService } from './../../../../core/services/account-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/data/account';
import { AccountService } from 'src/app/core/services/account.service';

function passwordMatchValidator(form: FormGroup) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value
    ? null
    : { passwordMismatch: true };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountApiService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        birthday: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: passwordMatchValidator }
    );
  }

  onSubmit(account: Account) {
    if (this.signUpForm.valid) {
      this.accountService.addAccount(account);
      this.signUpForm.reset();
    }
  }
}
