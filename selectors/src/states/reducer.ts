import { LoginActions } from "./actions";
import { createReducer, on } from "@ngrx/store";
import { initialState, UserState } from "./states";

export const loginReducer = createReducer(
    initialState,
    on(LoginActions.userLogin, (state:UserState, {isLoggedIn}) => ({ ...state, isLoggedIn})),
    on(LoginActions.userLogout, (state:UserState, {isLoggedIn}) => ({ ...state, isLoggedIn})),
);

