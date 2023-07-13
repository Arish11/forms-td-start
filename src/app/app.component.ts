import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formData') formChild : NgForm
  genders = ["male","female"]
  answer = ''
  defaultValue = 'pet'
  user = {
    name : "",
    email : "",
    question : "",
    answer : "",
    gender : "",
  }
  submit = false

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(formData){
  //   console.log(formData)
  // }

  onSubmit(){
   this.submit = true
   this.user.name = this.formChild.value.userData.username
   this.user.email = this.formChild.value.userData.mail
   this.user.question = this.formChild.value.secret
   this.user.answer = this.formChild.value.answer
   this.user.gender = this.formChild.value.gender
  this.formChild.reset()
  }

}
