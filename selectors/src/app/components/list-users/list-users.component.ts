// Angular
import { Component } from "@angular/core";

// Redux
import { Store } from "@ngrx/store";
import { AppState, User } from "../../../states/states";
import { allUsersSelector } from "../../../states/selectors";
import { Observable } from "rxjs";

@Component({
	selector: "app-list-users",
	templateUrl: "./list-users.component.html",
	styleUrl: "./list-users.component.css",
})
export class ListUsersComponent {
	users: Observable<User[]>;

	constructor(private store: Store<AppState>) {
		this.users = store.select(allUsersSelector);
	}
}
