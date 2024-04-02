// Angular
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

// Redux
import { User, UserRole } from "../../../states/states";
import { AdminActions } from "../../../states/actions";
import { Store } from "@ngrx/store";

// Material
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-add-users",
	standalone: false,
	templateUrl: "./add-users.component.html",
})
export class AddUsersComponent {
	addUserForm: FormGroup;
	roles = new FormControl("");
	roleList: UserRole[] = ["admin", "guest", "user"];

	// Erstellt einen neuen User mit den Daten aus dem Formular (Redux Dispatch)
	// Snackbars bei Success/Failure
	addUser() {
		try {
			this.store.dispatch(
				AdminActions.addUser({
					user: {
						username: this.addUserForm.value.username,
						password: this.addUserForm.value.password,
						role: this.addUserForm.value.role,
						id: Date.now().toString(),
					},
				})
			);
			this.snackBar.open(this.addUserForm.value.username + " wurde erfolgreich hinzugefügt.", "Schließen");
		} catch (error) {
			this.snackBar.open("Fehler bei Erstellung des Users: " + error, "Schließen");
		}
	}

	constructor(
		private fb: FormBuilder,
		private snackBar: MatSnackBar,
		private store: Store
	) {
		this.addUserForm = this.fb.group({
			username: ["", [Validators.minLength(3)]],
			password: ["", [Validators.minLength(3)]],
			role: [""],
		});
	}

	// Getters
	get username() {
		return this.addUserForm.get("username");
	}

	get password() {
		return this.addUserForm.get("password");
	}
	get role() {
		return this.addUserForm.get("role");
	}
}
