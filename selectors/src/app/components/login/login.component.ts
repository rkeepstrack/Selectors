import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginActions } from '../../../states/actions';
import { Observable } from 'rxjs';
import { AppState, UserState } from '../../../states/states';
import { isLoggedInSelector } from '../../../states/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    isLoggedIn$: Observable<boolean>;

    constructor(private store: Store<AppState>, private router: Router) {
        this.isLoggedIn$ = store.select(isLoggedInSelector)
        this.router = router;
    }

    // ngOnInit(): void {
    //     this.isLoggedIn$ = this.store.select(isLoggedInSelector)
    // }

    login() {
        this.store.dispatch(LoginActions.userLogin({isLoggedIn:true}))
        this.router.navigate(['/home'])
    }

    logout() {
        this.store.dispatch(LoginActions.userLogout({isLoggedIn: false}))
    }
}
