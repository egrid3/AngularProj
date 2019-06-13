import { Component, OnInit } from '@angular/core';
import {Post} from './Post';

import {PostService} from '../../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: 'posts.component.html',
  // styleUrls: ['../../../styles.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  title: string;
  body: string;

    constructor(private postService: PostService) { }
    ngOnInit() {
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
      });
    }

    addPost(post:Post) {
    const newPost = {
      title: this.title,
      body: this.body
    };
    this.postService.addPost(newPost).subscribe(post => {
      this.posts.push(post);
    });
    return false;
  }
}
