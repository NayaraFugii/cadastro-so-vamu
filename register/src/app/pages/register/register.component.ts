import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms"
import { Data } from "../shared/data.model"

import { HttpService } from "../shared/register.service"

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
      name:[null,[Validators.required, Validators.minLength(4)]],
      profession:[null, [Validators.required, Validators.minLength(4)]],
      weight:[null, [Validators.required, Validators.minLength(2)]],
      year:[null, [Validators.required, Validators.minLength(2)]],
      city: [null, [Validators.required, Validators.minLength(3)]],
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
    this.http.create(this.data, this._url ).subscribe(result => result)
  }

}
