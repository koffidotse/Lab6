import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient
    ) { }

    GetStudentData():Observable<any>{
     return this.http.get('https://jsonblob.com/api/jsonblob/95bb1faf-5ca1-11ea-b3a3-05b95858a921');
    }
}
