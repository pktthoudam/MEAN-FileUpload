import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  private createUrl="http://localhost:3000/users/create";
  private getUrl="http://localhost:3000/users/getUser";
  

  getUsers():Observable<any>{
    return this.httpClient.get<any>(this.getUrl)
  }

  postUser(body:any):Observable<any>{
    return this.httpClient.post<any>(this.createUrl, body)
  }


}
