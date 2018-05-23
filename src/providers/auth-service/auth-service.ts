import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

let apiUrl = "https://ns3056809.ip-46-105-124.eu/test/PHP-Slim-Restful-master/api/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new HttpHeaders();
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });

    });

  }

}
