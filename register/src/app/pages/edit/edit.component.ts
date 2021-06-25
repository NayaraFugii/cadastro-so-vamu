import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../register/shared/data.model';

import { HttpService} from "../register/shared/register.service"
import { ActivatedRoute} from "@angular/router"

import { FormBuilder,FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup
 _url:string
  idUpdate : number

  data: Data = {
    name: "",
    profession:"",
    weight:0,
    year: 0,
    city: "",
    birthday:"",
   }

  constructor(private http : HttpService, private activetedRoute: ActivatedRoute , private formBuilder: FormBuilder) {
    this._url="http://localhost:3000/post"
   }


  ngOnInit() {
    this.getDataById()

    this.form = this.formBuilder.group({
      name:[null,[Validators.required, Validators.minLength(4),Validators.maxLength(20)]],
      profession:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      weight:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      year:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      birthday:[null, [Validators.required]],
    })
   
  }

  getDataById(){
    console.log(typeof(Data))
    const id = this.activetedRoute.snapshot.params.id
    this.idUpdate = id
    console.log(`${this._url}/${this.idUpdate}`)
    this.http.getById(`${this._url}/${this.idUpdate}`).subscribe(data => this.data = data)
  }

  updateData(){
    console.log(this.form.value)
    this.data = {
      name: this.form.value.name,
      profession: this.form.value.profession,
      weight: this.form.value.weight,
      year: this.form.value.year,
      city: this.form.value.city,
      birthday:this.form.value.birthday,
    }

    this.http.updateRegister(`${this._url}/${this.idUpdate}`, this.data).subscribe(result => result)

  }
   
}
