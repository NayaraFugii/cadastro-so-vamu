import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms"
import { Data } from "./shared/data.model"

import { HttpService } from "../register/shared/register.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  _url: string

  data: Data = {
  name: "",
  profession:"",
  weight:0,
  year: 0,
  city: "",
  birthday:"",
 }

  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name:[null,[Validators.required, Validators.minLength(4),Validators.maxLength(20)]],
      profession:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      weight:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      year:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      birthday:[null, [Validators.required]],
    })
      this._url="http://localhost:3000/post"
  }

  onSubmit(){
  }

  createNewRegister(){
    console.log(this.form)
    this.data = {
      name: this.form.value.name,
      profession: this.form.value.profession,
      weight: this.form.value.weight,
      year: this.form.value.year,
      city: this.form.value.city,
      birthday:this.form.value.birthday,

    }
    console.log(typeof(this.data))
    this.http.create(this.data, this._url ).subscribe(result => console.log(result))
  }

}
