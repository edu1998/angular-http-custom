import {Inject, Injectable, Optional} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpType} from '../resources/types/http.type';
import {ResponseHttpType} from '../resources/types/response-http.type';
import {CONFIG_MODULE, HTTP_OPTIONS_OBSERVE_RESPONSE} from '../resources/constants/label.constants';
import {ConfigType} from '../resources/types/config.type';

type responseHttp<T> = Observable<ResponseHttpType<T>>;

@Injectable({
  providedIn: 'root'
})
export class HttpServices implements HttpType {
  private _apiUrl: string;

  constructor(private http: HttpClient, @Inject(CONFIG_MODULE) @Optional() private config?: ConfigType) {
    if (config) { this.apiUrl = config.baseUrl; }
  }

  public get<T>(url: string = '', headers?: HttpHeaders): responseHttp<T> {
    return this.http
      .get<ResponseHttpType<T>>(`${this._apiUrl + url}`, {
        observe: HTTP_OPTIONS_OBSERVE_RESPONSE,
        headers
      })
      .pipe(map(res => res.body));
  }

  public post<T, K>(url: string = '', data: K, headers?: HttpHeaders): responseHttp<T> {
    return this.http
      .post<ResponseHttpType<T>>(`${this._apiUrl + url}`, data, {
        observe: HTTP_OPTIONS_OBSERVE_RESPONSE,
        headers
      })
      .pipe(map(res => res.body));
  }

  public put<T, K>(url: string, body: K, headers?: HttpHeaders): responseHttp<T> {
    return this.http
      .put<ResponseHttpType<T>>(this._apiUrl + url, body, {
        observe: HTTP_OPTIONS_OBSERVE_RESPONSE,
        headers
      })
      .pipe(map(res => res.body));
  }

  public delete<T>(url: string, headers?: HttpHeaders): responseHttp<T> {
    return this.http
      .delete<ResponseHttpType<T>>(this._apiUrl + url, {
        observe: HTTP_OPTIONS_OBSERVE_RESPONSE,
        headers
      })
      .pipe(map(res => res.body));
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }
}
