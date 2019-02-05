import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Article } from '../model/article';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  posts: Article[];
  carousel= ['active'];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostsLastUpdate();
  }

  getPostsLastUpdate(): void {
    this.postService.getPostsLastUpdate()
      .subscribe(posts => this.posts = posts);
  }
}
