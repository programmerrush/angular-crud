import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }

}
