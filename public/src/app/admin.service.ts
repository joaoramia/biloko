import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  login(n:string, p: string){
      console.log('here', n, p);
      return this.http.post('http://localhost:3030/v1/getout', {"n": n, "p": p})
      .map((response: Response) => {
        let res = response.json();
        console.log(res);
        if (res && res.token){
            localStorage.setItem('currentUser', JSON.stringify(res));
            localStorage.setItem('token', JSON.stringify(res.token));
        }
      })
  }

}
