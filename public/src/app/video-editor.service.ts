import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VideoEditorService {

  headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })

  options = new RequestOptions({ headers: this.headers })

  constructor(private http: Http) { }

  add(obj: any){
      console.log(obj);
      obj.token = localStorage.getItem('token');
      this.updateHeaders();

      return this.http.post('http://localhost:3030/api/video/add', obj, this.options)
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAll(){
      return this.http.get('http://localhost:3030/api/video/get')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getByType(type: String){
      return this.http.get(`http://localhost:3030/api/video/get/${type}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getById(id: String){
      return this.http.get(`http://localhost:3030/api/video/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(obj:any){
      obj.token = localStorage.getItem('token');
      this.updateHeaders();
      console.log(obj);

      return this.http.post('http://localhost:3030/api/video/edit', obj, this.options)
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateHeaders() {
      this.headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      this.options = new RequestOptions({ headers: this.headers });
  }

}
