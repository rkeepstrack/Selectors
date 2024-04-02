// Redux
import { createSelector } from "@ngrx/store";
import { UserState, AppState } from "./states";

export const selectUser = (state: AppState) => state;
export const selectError = (state: AppState) => state.error;

export const userSelector = createSelector(selectUser, (state: UserState) => state);
export const allUsersSelector = createSelector(selectUser, (state: AppState) => state.users);
export const errorSelector = createSelector(selectUser, (state: UserState) => state.error);
export const isLoggedInSelector = createSelector(selectUser, (state: UserState) => state.isLoggedIn);
export const roleSelector = createSelector(selectUser, (state: UserState) => state.role);
