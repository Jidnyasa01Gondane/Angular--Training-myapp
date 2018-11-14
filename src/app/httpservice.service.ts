import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpClient: HttpClient) { }

  private urlPosts = "https://jsonplaceholder.typicode.com/posts";

  getData() {
    return this.httpClient.get(this.urlPosts);
  }
}
