import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { HomeComponent } from './home/home.component';

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
