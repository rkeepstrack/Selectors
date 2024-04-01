import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginActions } from '../../../states/actions';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/states';
import { isLoggedInSelector } from '../../../states/selectors';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    isLoggedIn$: Observable<boolean>;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
        this.isLoggedIn$ = store.select(isLoggedInSelector)
        this.router = router;
        this.loginForm = this.fb.group({
            username: ['', [
              Validators.minLength(3)
            ]],
            password: ['', [
              Validators.minLength(3)
            ]]
          })
    }

    onSubmit() {
        console.log("submitted: ", this.loginForm.value);
        this.store.dispatch(LoginActions.userLogin(this.loginForm.value))
        this.router.navigate(['/home'])
    }

    logout() {
        this.store.dispatch(LoginActions.userLogout({isLoggedIn: false}))
    }

    get username() {
        return this.loginForm.get('username');
    
      }
    
      get password() {
        return this.loginForm.get('password');
      }
}
