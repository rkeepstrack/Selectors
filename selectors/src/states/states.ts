export interface UserState {
	isLoggedIn: boolean;
	role: UserRole;
	error: string | null;
}

export interface User {
	username: string;
	password: string;
	role: UserRole;
	id: string;
}

export interface MinimalUser {
	username: string;
	password: string;
}

export type UserRole = "admin" | "user" | "guest";

export interface AppState {
	isLoggedIn: boolean;
	role: UserRole;
	error: string | null;
	users: User[];
}

export const initialState: AppState = {
	isLoggedIn: false,
	role: "guest",
	error: null,
	users: [{ username: "bypass", password: "bypassword", role: "admin", id: "1712006384889" }],
};
