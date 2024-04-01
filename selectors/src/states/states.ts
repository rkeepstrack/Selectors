export interface UserState {
    isLoggedIn: boolean;
    role: UserRole;
}

export interface User {
    username: string;
    password: string;
    role: UserRole;
    id: string;

}

export type UserRole = "admin" | "user" | "guest" ;

export interface AppState {
    user: UserState;
    users: User[];
}

export const initialState: AppState = {
    user: {isLoggedIn: false, role: "guest" },
    users: [{username: "bypass", password: "bypassword", role: "admin", id: "1712006384889"}]
}