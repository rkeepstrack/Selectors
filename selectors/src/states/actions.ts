import { createActionGroup, props } from "@ngrx/store";
import { User } from "./states";

export const LoginActions = createActionGroup({
    source: 'LOGIN',
    events: {
        'userLogin': props<{user:User}>(),
        'userLogout': props<{isLoggedIn: boolean}>()
    }
})

export const AdminActions = createActionGroup({
    source: 'ADMINISTRATION',
    events: {
        'addUser': props<{user: User}>(),
        'removeUser': props<{id: string}>()
    }
})

// // Login action
// export const Login = createAction('[LOGIN] User Logged In', props<{isLoggedIn: boolean}>());

// // Logout action
// export const Logout = createAction('[LOGIN] User Logged Out', props<{isLoggedIn: boolean}>());

