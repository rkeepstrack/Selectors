import { createSelector } from "@ngrx/store";
import { UserState, AppState } from "./states";

export const selectUser = (state:AppState) => state.user;
export const isLoggedInSelector = createSelector(selectUser, (state:UserState) => state.isLoggedIn)