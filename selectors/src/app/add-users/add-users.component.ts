// Components
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  standalone: false,
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss'
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup;
  users: { email: string, password: string }[]

  //Form State
  loading = false;
  success = false;

  //Success Message
  showSuccessMessage = false;
  showErrorMessage = false;

  addUser() {
    this.users.push({ email: this.addUserForm.value.email, password: this.addUserForm.value.password });
    this.showSuccessMessage = true;
  }

  constructor(private fb: FormBuilder) { 
    console.log("init")
    this.users = [{ email: "bypass@login.de", password: "bypasspassword" }]

    this.addUserForm = this.fb.group({
      email: ['', [
        Validators.email
      ]],
      password: ['', [
        Validators.minLength(3)
      ]]
    })
  }

  ngOnInit() {

  }


  get email() {
    return this.addUserForm.get('email');
  }

  get password() {
    return this.addUserForm.get('password');
  }
}