import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { "path": '', component: LoginComponent },
    { "path": 'login', component: LoginComponent },
    { "path": 'add-users', component: AddUsersComponent },
    { "path": 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
