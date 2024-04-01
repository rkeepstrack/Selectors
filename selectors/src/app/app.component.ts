import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginActions } from '../states/actions';
import { Observable } from 'rxjs';
import { AppState, UserState } from '../states/states';
import { isLoggedInSelector } from '../states/selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'selectors';
    isLoggedIn$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.isLoggedIn$ = store.select(isLoggedInSelector)
    }

    // ngOnInit(): void {
    //     this.isLoggedIn$ = this.store.select(isLoggedInSelector)
    // }

    login() {
        this.store.dispatch(LoginActions.userLogin({isLoggedIn:true}))
    }

    logout() {
        this.store.dispatch(LoginActions.userLogout({isLoggedIn: false}))
    }
}