import { LoginActions, AdminActions } from "./actions";
import { createReducer, on } from "@ngrx/store";
import { AppState, initialState, UserState } from "./states";

export const loginReducer = createReducer(
    initialState,
    on(LoginActions.userLogin, (state:AppState, {user}) => ({ ...state, ...user})),
    on(LoginActions.userLogout, (state:AppState, {isLoggedIn}) => ({ ...state, isLoggedIn})),
);

const AdminReducer = createReducer(
    initialState,
    on(AdminActions.addUser, (state: AppState, {user}) => (
        { ...state, users: [...state.users, user]}
    )),
    on(AdminActions.removeUser, (state: AppState, {id}) => (
        { ...state, users: state.users.filter((user) => user.id !== id)}
    )),
);

