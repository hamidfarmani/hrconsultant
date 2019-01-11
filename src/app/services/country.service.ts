import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Response } from '@angular/http';
import { Country } from '../models/Country';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  private countryURL = 'http://localhost:1589/countries';

  getAll(): Observable<any> {
    return this.http.get(this.countryURL);
  }

  public getByName(name): Observable<any> {
    return this.http.get(this.countryURL + "/" + name + "/name");
  }

  public findTeacherByUserPass(teacher): Observable<any> {
    return this.http.post(this.countryURL + "/find", teacher);
  }

  // public deleteUser(userid) {
  //   return this.http.delete(this.userUrl + "/"+ userid);
  // }

  public createTeacher(teacher) {
    return this.http.post<Country>(this.countryURL, teacher);
  }

  // public updateUser(user) {
  //   alert(user.id);
  //   return this.http.patch<User>(this.userUrl+ "/"+ user.id, user);
  // }

  // public updatePassword(user) {
  //   return this.http.patch<User>(this.userUrl+ "/"+ user.id+"/password", user);
  // }
  // public login(loginuser : LoginUserPass){
  //   return this.http.post(this.loginUrl,loginuser);
  // }

}
