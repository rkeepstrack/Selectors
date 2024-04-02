// Redux
import { LoginActions, AdminActions } from "./actions";
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppState, initialState, User } from "./states";

// Loginfunktionen
export const loginReducer = createReducer(
	initialState,
	on(LoginActions.userLogin, (state: AppState, { username, password }) => {
		let potentialUser: User | undefined = userExists(username, password, state.users);
		if (potentialUser) {
			return { ...state, user: { isLoggedIn: true, role: potentialUser.role, error: null } };
		} else {
			return {
				...state,
			};
		}
	}),
	on(LoginActions.userLogout, (state: AppState, { isLoggedIn }) => ({ ...state, isLoggedIn }))
);

// Adminfunktionen zum Erstellen und Entfernen von Nutzern
const AdminReducer = createReducer(
	initialState,
	on(AdminActions.addUser, (state: AppState, { user }) => ({ ...state, users: [...state.users, user] })),
	on(AdminActions.removeUser, (state: AppState, { id }) => ({ ...state, users: state.users.filter((user) => user.id !== id) }))
);

// Gibt einen User mithilfe der ID zurück, sofern er existiert
function userExists(username: string, password: string, users: User[]) {
	const user = users.find((user) => {
		return user.username === username && user.password === password;
	});

	return user ?? user;
}

export const reducers: ActionReducerMap<any> = {
	user: loginReducer,
	users: AdminReducer,
};
