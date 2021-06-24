import { Component, OnInit } from '@angular/core';
import { HttpService } from "../register/shared/register.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _url: string;
  dataForm: any;
  
  

  constructor( private http: HttpService) { 
    this._url="http://localhost:3000/post"
  }
  

  ngOnInit() {
    this.getData()
  }


  getData(){
    this.http.getAll(this._url).subscribe(data => this.dataForm = data)
    
  }

  deleteData(id: number){
    this.http.deleteRegister(`${this._url}/${id}`).subscribe(()=> this.getData() )
  }

}
