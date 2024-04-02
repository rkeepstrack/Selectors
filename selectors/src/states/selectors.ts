import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState, AppState } from "./states";

export const selectUser = (state: AppState) => state.user;
export const userSelector = createSelector(selectUser, (state: UserState) => state);

export const userKey = "users";
export const selectUsers = createFeatureSelector<AppState>(userKey);
export const selectUsersArray = createSelector(selectUsers, (state: AppState) => state.users);

export const allUsersSelector = createSelector(selectUsers, (state: AppState) => state.users);

export const selectError = (state: AppState) => {
	console.log("UserState:", state.user); // Überprüfe den UserState
	console.log("Error:", state.user.error); // Überprüfe den Fehlerwert im UserState
	return state.user.error;
};

export const errorSelector = createSelector(selectUser, (state: UserState) => state.error);
export const isLoggedInSelector = createSelector(selectUser, (state: UserState) => state.isLoggedIn);

export const wholeStateSelector = createSelector(
	(state: AppState) => state,
	(state: AppState) => state
);

export const roleSelector = createSelector(selectUser, (state: UserState) => state.role);
