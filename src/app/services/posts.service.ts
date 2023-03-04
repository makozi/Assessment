import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPostsData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

  createUser(postsData: any) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, postsData, httpOptions);
  }

  deletePost(postsData: { id: any }) {
    const url = `https://jsonplaceholder.typicode.com/users/${postsData.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };
    return this.http.delete(url, httpOptions);
  }

  editPost(postsData: { id: any }) {
    const url = `https://jsonplaceholder.typicode.com/users/${postsData.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.put(url, postsData, httpOptions);
  }
}
