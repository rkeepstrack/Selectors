// Angular
import { Component } from "@angular/core";

// Redux
import { Store } from "@ngrx/store";
import { AppState, User } from "../../../states/states";
import { selectUsersArray } from "../../../states/selectors";

@Component({
	selector: "app-list-users",
	templateUrl: "./list-users.component.html",
	styleUrl: "./list-users.component.css",
})
export class ListUsersComponent {
	users: User[] | [];

	constructor(private store: Store<AppState>) {
		this.users = [];
		store.select(selectUsersArray).subscribe((users) => {
			console.log(users);
			this.users = users;
			return users;
		});
	}
}
