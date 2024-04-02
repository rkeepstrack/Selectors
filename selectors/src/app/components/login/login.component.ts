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
	hasError$: Observable<string | null>;

	loginForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private store: Store<AppState>,
		private router: Router
	) {
		this.userState$ = store.select(userSelector);
		this.isLoggedIn$ = store.select(isLoggedInSelector);
		this.hasError$ = store.select(selectError).pipe(map((error) => error));
		console.log(this.hasError$);

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
			if (error) {
				// Es liegt ein Fehler vor, handle ihn entsprechend
				console.log("Fehler:", error);
				this.router.navigate(["/home"]);
			} else {
				// Es liegt kein Fehler vor, fahre mit der Anmeldung fort
				console.log("Kein Fehler, Anmeldung erfolgreich.", error);
				// Führe hier deine Anmeldeaktion aus
			}
		});

		// if (this.hasError$.pipe(map((error) => error)) === null) {
		// 	console.log(this.hasError$, "es gibt keinen fehler");
		// 	this.router.navigate(["/home"]);
		// } else {
		// 	console.log(this.hasError$.pipe(map((error) => error)), "es gibt einen fehler");
		// }
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
