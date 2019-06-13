import {Injectable} from '@angular/core';
import {Post} from '../components/posts/Post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// import {POSTS} from '../components/posts/mock-posts';
// import { HttpClient } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class PostService{
  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit = '?_limit=8';

  constructor(private _http:HttpClient) { }

  // Get Posts
  getPosts():Observable<Post[]> {
    return this._http.get<Post[]> (`${this.postsUrl}${this.postsLimit}`);
  //  .map(res => res.json()); (dont need old map)
  }

  // Add Todo
  addPost(post:Post):Observable<Post> {
    return this._http.post<Post>(this.postsUrl, post, httpOptions);
  //  .map(res => res.json()); (dont need old map)
  }
}
