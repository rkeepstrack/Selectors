// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

// Material
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

// Components
import { AddUsersComponent } from "./components/add-users/add-users.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ListUsersComponent } from "./components/list-users/list-users.component";
import { AppComponent } from "./app.component";

// Redux
import { StoreModule } from "@ngrx/store";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { reducers } from "../states/reducer";

@NgModule({
	declarations: [AppComponent, AddUsersComponent, LoginComponent, HomeComponent, ListUsersComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSlideToggleModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		CommonModule,
		MatInputModule,
		MatCardModule,
		RouterOutlet,
		StoreModule.forRoot(reducers),
		MatDividerModule,
		FormsModule,
		MatSnackBarModule,
		MatSelectModule,
	],
	providers: [provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
