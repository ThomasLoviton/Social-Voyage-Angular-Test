import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';

@Component({
  selector: 'app-modifier-post',
  templateUrl: './modifier-post.component.html',
  styleUrls: ['./modifier-post.component.css']
})
export class ModifierPostComponent implements OnInit {

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'info', 'dark'];
  colorsInverse = ['#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#822900', '#E69C24'];
  sec:number = new Date().getSeconds();
  article: Article;
  posts: Article[];
  constructor(private location: Location, private postService: PostService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getPost();
  }

  goBack(): void {
    this.location.back();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(article => this.article = article);
  }

  modifier(idA: number, titre: string, texte: string, mini_texte: string, auteur: string, urlImage: string) {

    titre = titre.trim();
    texte = texte.trim();
    mini_texte = mini_texte.trim();
    auteur = auteur.trim();
    urlImage = urlImage.trim();

    if (!titre) {
      return;
    }
    this.postService.modifyPost({ titre, texte, mini_texte, auteur, urlImage} as Article, idA ).subscribe(post => { this.posts.push(post); });
  }
}
      
