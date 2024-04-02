// Redux
import { createActionGroup, props } from "@ngrx/store";
import { User } from "./states";

export const LoginActions = createActionGroup({
	source: "LOGIN",
	events: {
		userLogin: props<{ username: string; password: string }>(),
		userLogout: props<{ isLoggedIn: boolean }>(),
	},
});

export const AdminActions = createActionGroup({
	source: "ADMINISTRATION",
	events: {
		addUser: props<{ user: User }>(),
		removeUser: props<{ id: string }>(),
	},
});
