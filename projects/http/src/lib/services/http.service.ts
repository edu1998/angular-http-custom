import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {}

  public hello() {
    console.log('this is one custom lib');
    return 'this is one custom lib'
  }
}
