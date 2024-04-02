// Angular
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

// Redux
import { UserRole } from "../../../states/states";

// Material
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-add-users",
	standalone: false,
	templateUrl: "./add-users.component.html",
	styleUrl: "./add-users.component.scss",
})
export class AddUsersComponent {
	addUserForm: FormGroup;
	users: { username: string; password: string }[];
	roles = new FormControl("");
	roleList: UserRole[] = ["admin", "guest", "user"];

	//Form State
	loading = false;
	success = false;

	//Success Message
	showSuccessMessage = false;
	showErrorMessage = false;

	addUser() {
		this.users.push({ username: this.addUserForm.value.username, password: this.addUserForm.value.password });
		this.snackBar.open(this.addUserForm.value.username + " wurde erfolgreich hinzugefügt.", "Schließen");
	}

	constructor(
		private fb: FormBuilder,
		private snackBar: MatSnackBar
	) {
		this.users = [{ username: "bypass@login.de", password: "bypasspassword" }];
		this.addUserForm = this.fb.group({
			username: ["", [Validators.minLength(3)]],
			password: ["", [Validators.minLength(3)]],
			role: [""],
		});
	}

	get username() {
		return this.addUserForm.get("username");
	}

	get password() {
		return this.addUserForm.get("password");
	}
}
