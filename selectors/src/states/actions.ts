import { createAction, createActionGroup, props } from "@ngrx/store";

export const LoginActions = createActionGroup({
    source: 'LOGIN',
    events: {
        'userLogin': props<{isLoggedIn: boolean}>(),
        'userLogout': props<{isLoggedIn: boolean}>()
    }
})

// // Login action
// export const Login = createAction('[LOGIN] User Logged In', props<{isLoggedIn: boolean}>());

// // Logout action
// export const Logout = createAction('[LOGIN] User Logged Out', props<{isLoggedIn: boolean}>());

