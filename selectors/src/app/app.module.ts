import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { StoreModule } from "@ngrx/store";
import { reducers } from "../states/reducer";
import { AddUsersComponent } from "./components/add-users/add-users.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

import { RouterOutlet } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ListUsersComponent } from "./components/list-users/list-users.component";

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
	],
	providers: [provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
