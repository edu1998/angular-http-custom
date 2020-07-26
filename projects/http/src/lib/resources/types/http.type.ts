import { Observable } from 'rxjs';
import { ResponseHttpType } from './response-http.type';

export interface HttpType {
  apiUrl: string;
  get<T>(url: string): Observable<ResponseHttpType<T>>;
  post<T, k>(url: string, data: k): Observable<ResponseHttpType<T>>;
  put<T, K>(url: string, body: K): Observable<ResponseHttpType<T>>;
  delete<T>(url: string, body, headers): Observable<ResponseHttpType<T>>;
}
