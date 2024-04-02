// Angular
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

// Redux
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { errorSelector, isLoggedInSelector, selectError, userSelector } from "../../../states/selectors";
import { AppState, UserState } from "../../../states/states";
import { LoginActions } from "../../../states/actions";

// Material
import { MatSnackBar } from "@angular/material/snack-bar";

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
		private router: Router,
		private snackBar: MatSnackBar
	) {
		this.userState$ = store.select(userSelector);
		this.isLoggedIn$ = store.select(isLoggedInSelector);
		this.hasError$ = store.select(selectError);

		this.router = router;
		this.loginForm = this.fb.group({
			username: ["", [Validators.minLength(3)]],
			password: ["", [Validators.minLength(3)]],
		});
	}

	// Anmeldevorgang mithilfe der Daten aus dem Formular (Redux Dispatch)
	// Bei Fehler wird eine Material Snackbar geöffnet - ansonsten wird der User auf die Homeseite weitergeleitet

	onSubmit() {
		let { username, password } = this.loginForm.value;
		this.store.dispatch(LoginActions.userLogin({ username, password }));
		this.store.select(errorSelector).subscribe((error) => {
			// if (error === null) {
			// DEBUG: da NGRX nicht korrekt implementiert ist, wird der User immer durch den Login geleitet
			if (true) {
				this.router.navigate(["/home"]);
			} else {
				this.snackBar.open("Anmeldung fehlgeschlagen", "Schließen");
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
