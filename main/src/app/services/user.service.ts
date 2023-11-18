import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8090';
  constructor(private http : HttpClient) { }


  ajouteruser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajouteruser`, userData);
  }

  loginuser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' });
  }

 
  getrolebyusername(username : any):Observable<String> {
    return this.http.get(`${this.baseUrl}/getroleforauth/`+username, { responseType: 'text' });
  }

}
