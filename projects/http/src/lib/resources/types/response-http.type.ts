import {Observable} from 'rxjs';

export interface ResponseHttpType<T> {
  message: string;
  data: T;
  code: number;
}

export type responseHttp<T> = Observable<ResponseHttpType<T>>;

