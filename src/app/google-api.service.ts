import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor() { }

  // https://developers.google.com/api-client-library/javascript/start/start-js

  getReview(product: string, user: string): Promise<Response> {
    return fetch('')
  }
}
