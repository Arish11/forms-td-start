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

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(formData){
  //   console.log(formData)
  // }

  onSubmit(){
    console.log(this.formChild)
  }

}
