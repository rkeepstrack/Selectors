import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoginActions } from "../../../states/actions";
import { isLoggedInSelector, roleSelector } from "../../../states/selectors";
import { AppState } from "../../../states/states";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	isLoggedIn$: boolean | null;
	role$: Observable<string>;
	isAdmin: boolean;

	constructor(
		private store: Store<AppState>,
		private router: Router
	) {
		this.isLoggedIn$ = null;
		store.select(isLoggedInSelector).subscribe((isLoggedIn) => {
			console.log(isLoggedIn, "isLoggedIn");
			this.isLoggedIn$ = isLoggedIn;
			return isLoggedIn;
		});
		this.role$ = store.select(roleSelector);
		this.isAdmin = false;
	}

	logout() {
		this.store.dispatch(LoginActions.userLogout({ isLoggedIn: false }));
	}
}
