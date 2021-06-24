import { Component, OnInit } from '@angular/core';
import { Data } from '../register/shared/data.model';

import { HttpService} from "../register/shared/register.service"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 _url:string
 dataUpdate: Data

  constructor() {
    this._url="http://localhost:3000/post"
   }

  ngOnInit() {
  }
   
}
