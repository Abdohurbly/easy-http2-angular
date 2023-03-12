import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpEvent, HttpHeaders, } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EasyHttpService {

  constructor(private httpClient: HttpClient) { }
  /**
    * 
    * @param url 
    * @param headers 
    * @param params 
    * @returns 
    */
  async get<T>(url: string, headers: any, params: { [key: string]: any }) {
    let httpEvent: Observable<HttpEvent<T>>;
    return new Promise((yes, _) => {
      httpEvent = this.httpClient.get<T>(url, requestHeader(
        headers,
        this.setQueryParam(params)
      ))
      httpEvent.subscribe({
        next: (response) => {
          yes(response);
        },
        error: (err: HttpErrorResponse) => {
          yes(err.error)
        }
      });
    });

  }

  /**
  * 
  * @param url String Url
  * @param headers any Header
  * @param body Object
  * @returns return Promise<T>
  */
  async post(url: string, body: any, headers: any) {
    return new Promise((yes, _) => {
      this.httpClient.post(url, body, requestHeader(headers, new HttpParams())).subscribe({
        next: (response) => {
          yes(response);
        },
        error: (err: HttpErrorResponse) => {
          yes(err.error)
        }
      });
    });
  }

  /**
  * 
  * @param url String Url
  * @param headers String Headers
  * @param body Object
  * @returns return Promise<T>
  */
  async put(url: string, body: any, headers: any) {
    return new Promise((yes, _) => {
      this.httpClient.put(url, body, requestHeader(headers, new HttpParams()))
        .subscribe({
          next: (response) => {
            yes(response);
          },
          error: (err: HttpErrorResponse) => {
            yes(err.error);
          }
        });
    });
  }

  /**
  * 
  * @param url String Url
  * @param token String Token
  * @returns return Promise<T>
  */
  async delete(url: string, headers: any) {
    return new Promise((yes, _) => {
      this.httpClient.delete(url, requestHeader(headers, new HttpHeaders())).subscribe({
        next: (response) => {
          yes(response);
        },
        error: (err: HttpErrorResponse) => {
          yes(err.error);
        }
      });
    });
  }

  /**
   * 
   * @param params array of key value param
   * @returns HttParams Obj
   */
  setQueryParam(params: { [key: string]: any }): HttpParams {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }
}


export function requestHeader(headers: any, params: { [key: string]: any }): any {
  return {
    headers: new HttpHeaders(headers),
    params: params,
  };
}
