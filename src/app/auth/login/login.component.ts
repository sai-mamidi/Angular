import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, map, tap } from 'rxjs';
import GlobalVariables from 'src/app/contstant';
import { RequesterService } from 'src/app/sharedmodule/requester.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private service: RequesterService,private constant: GlobalVariables  ){

  }

  ngOnInit(){
    console.log('Hi')
  }

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    accept: ['', Validators.required],
  })

  isFormSubmitted = false;
  login(){
    
    this.isFormSubmitted = true;
    if(this.form.invalid) return

    const {username, password} = this.form.value

    this.service.logIn(this.form.value, this.constant.dbUrl).pipe(
      tap((users:any )=> console.log(users)),
      map((users:any) =>  users.find((user:any) => user.username == username && user.password == password) )).subscribe(res => {
      console.log(res)
    })

  }
}
