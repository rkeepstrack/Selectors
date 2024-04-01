import { Component } from '@angular/core';
import { wholeStateSelector } from '../states/selectors';
import { AppState } from '../states/states';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-root',
  template: `
    {{(wholeState$) | async | json }}
    <router-outlet />
    
`,
  styles:""
})
export class AppComponent {
    title = 'selectors';
    wholeState$: Observable<AppState>;

    constructor(private store: Store<AppState>) {
        this.wholeState$ = store.select(wholeStateSelector)
    }

}