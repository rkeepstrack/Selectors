import { LoginActions, AdminActions } from "./actions";
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppState, initialState, MinimalUser, User } from "./states";

export const loginReducer = createReducer(
	initialState,
	on(LoginActions.userLogin, (state: AppState, { username, password }: MinimalUser) => {
		let potentialUser: User | undefined = userExists(username, password, state.users);
		if (potentialUser) {
			console.log("success");
			return { ...state, user: { isLoggedIn: true, role: potentialUser.role, error: null } };
		} else {
			console.log("else");
			return {
				...state,
				error: "diggerfehler",
			};
		}
	}),
	on(LoginActions.userLogout, (state: AppState, { isLoggedIn }) => ({ ...state, isLoggedIn }))
);

const AdminReducer = createReducer(
	initialState,
	on(AdminActions.addUser, (state: AppState, { user }) => ({ ...state, users: [...state.users, user] })),
	on(AdminActions.removeUser, (state: AppState, { id }) => ({ ...state, users: state.users.filter((user) => user.id !== id) }))
);

function userExists(username: string, password: string, users: User[]) {
	const user = users.find((user) => {
		return user.username === username && user.password === password;
	});

	console.log(user, "test");

	return user ?? user;
}

export const reducers: ActionReducerMap<any> = {
	user: loginReducer,
	users: AdminReducer,
};
