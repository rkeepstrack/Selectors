import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { LoginActions } from "../../../states/actions";
import { Observable } from "rxjs";
import { AppState, MinimalUser, UserState } from "../../../states/states";
import { errorSelector, isLoggedInSelector, selectError, userSelector } from "../../../states/selectors";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map } from "rxjs";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	userState$: Observable<UserState>;
	isLoggedIn$: Observable<boolean>;
	hasError$: string | null;

	loginForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private store: Store<AppState>,
		private router: Router
	) {
		this.userState$ = store.select(userSelector);
		this.isLoggedIn$ = store.select(isLoggedInSelector);
		this.hasError$ = null;
		store.select(errorSelector).subscribe((error) => {
			console.log(error, "errorsubscribe");
			this.hasError$ = error;
		});

		this.router = router;
		this.loginForm = this.fb.group({
			username: ["", [Validators.minLength(3)]],
			password: ["", [Validators.minLength(3)]],
		});
	}

	onSubmit() {
		let { username, password }: MinimalUser = this.loginForm.value;
		this.store.dispatch(LoginActions.userLogin({ username, password }));

		this.store.select(errorSelector).subscribe((error) => {
			// Extrahiere den Fehlerstring aus dem Objekt
			if (error === null) {
				console.log("Fehler:", error);
				this.router.navigate(["/home"]);
			} else {
				console.log("Fehler", error);
				// Führe hier deine Anmeldeaktion aus
			}
		});
	}

	logout() {
		this.store.dispatch(LoginActions.userLogout({ isLoggedIn: false }));
	}

	get username() {
		return this.loginForm.get("username");
	}

	get password() {
		return this.loginForm.get("password");
	}
}
