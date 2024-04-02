import { Component } from "@angular/core";
import { errorSelector, wholeStateSelector } from "../states/selectors";
import { AppState } from "../states/states";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
	selector: "app-root",
	template: `
		{{ wholeState$ | async | json }}
		{{ hasError$ | async | json }}
		<router-outlet />
	`,
	styles: "",
})
export class AppComponent {
	title = "selectors";
	wholeState$: Observable<AppState>;
	hasError$: Observable<string | null>;

	constructor(private store: Store<AppState>) {
		this.wholeState$ = store.select(wholeStateSelector);
		this.hasError$ = store.select(errorSelector);
	}
}
