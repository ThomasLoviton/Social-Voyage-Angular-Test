import { Component, OnInit } from '@angular/core';

import { PostService } from '../service/post.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../model/article';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  sec:number = new Date().getSeconds();
  today: number = Date.now();

  article: Article;
  selectedPost: Article;

  constructor(private route: ActivatedRoute,

    private location: Location,
    private postService: PostService) { }

    ngOnInit(): void {
      this.getPost();
    }
   
    getPost(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.postService.getPost(id)
        .subscribe(article => this.article = article);
    }

   
    goBack(): void {
      this.location.back();
    }

    deletePost(id: number):void{
      this.postService.deletePost(id).subscribe(() => this.location.back());
    }

}
