import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private restangular: Restangular) { }

  postResource(apiRoute, message){
    return this.restangular.all(apiRoute).post(message);

  }
  gerResource(apiRoute):Observable<any[]>{
    return this.restangular.all(apiRoute).getList();

  }

}
