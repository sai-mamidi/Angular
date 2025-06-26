import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
// import {db} from '../../../../../learn/db.json'
import {RequesterService} from '../../sharedmodule/requester.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private fb: FormBuilder,
    private RequesterService: RequesterService
  ){

  }

  // dbUrl = '../../../../../learn/db.json'
  dbUrl = 'http://localhost:3000/users'

  signup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]]
    })

  signupSumit(){
    if(this.signup.invalid) return
    this.RequesterService.addNewUser(this.signup.value, this.dbUrl).subscribe(res => {
      console.log(res)
    })

    
    
  }
  form = this.fb.group({
    name: [''],
    group: this.fb.array([this.createGroup()])
  })

  createGroup(){
    return this.fb.group({
      name: ['']
    })
  }

  get group(): FormArray {
  return this.form.get('group') as FormArray;
}

remove(i:number){
  this.group.removeAt(1)
}

add(){
  this.group.push(this.createGroup())
}

  print(){
    console.log(this.form)
  }

}
