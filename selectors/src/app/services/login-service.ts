// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { AppState } from "../../states/states";
// import { Store } from "@ngrx/store";
// import { Router } from "@angular/router";
// import { LoginActions } from "../../states/actions";
// import { isLoggedInSelector } from "../../states/selectors";

// @Injectable()
// export class LoginService {
//     isLoggedIn$: Observable<boolean>;

//     constructor(private store: Store<AppState>, private router: Router) {
//         this.isLoggedIn$ = store.select(isLoggedInSelector)
//         this.router = router;
//     }

//     // ngOnInit(): void {
//     //     this.isLoggedIn$ = this.store.select(isLoggedInSelector)
//     // }

//     login() {
//         this.store.dispatch(LoginActions.userLogin({isLoggedIn:true}))
//         this.router.navigate(['/home'])
//     }

//     logout() {
//         this.store.dispatch(LoginActions.userLogout({isLoggedIn: false}))
//     }
// }