import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginActions } from '../../../states/actions';
import { isLoggedInSelector } from '../../../states/selectors';
import { AppState } from '../../../states/states';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    isLoggedIn$: Observable<boolean>;

    constructor(private store: Store<AppState>, private router: Router) {
        this.isLoggedIn$ = store.select(isLoggedInSelector)
    }

    logout() {
        this.store.dispatch(LoginActions.userLogout({isLoggedIn: false}))
    }
}

