import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core"

import { Data } from './data.model';

import { Observable, throwError } from "rxjs";
import {map, catchError, retry} from "rxjs/operators"
import { EventEmitter } from "events";

@Injectable()
    export class HttpService{

        constructor(private http: HttpClient){}

        getAll(_url: string): Observable<object>{
            return this.http.get<object>(_url)
            .pipe(
                map(data => data),
                catchError(error => throwError(error["message"]))
            )           
        }

        getById(_url: string): Observable<object>{
            return this.http.get<object>(_url)
            .pipe(
                map(data => data),
                catchError(error => throwError(error["message"]))
            )           
        }

        create(form:Data ,_url: string): Observable<object>{
            return this.http.post<Data>(_url, form)
            .pipe(
                map(result => result),
                catchError(error => throwError(error["message"])),

            )
        }

        deleteRegister(_url: string): Observable<object>{
            return this.http.delete<object>(_url)
        }    
        updateRegister(_url: string, data: object): Observable<object>{
            return this.http.put(_url, data)
        }     
            
    }
