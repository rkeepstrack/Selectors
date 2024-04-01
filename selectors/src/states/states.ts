export interface UserState {
    isLoggedIn: boolean;
    name: string;
}

export const initialState: UserState = {
    isLoggedIn: false,
    name: "HANS"
}

export interface AppState {
    user: UserState;
}