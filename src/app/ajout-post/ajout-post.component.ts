import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Article } from '../model/article';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajout-post',
  templateUrl: './ajout-post.component.html',
  styleUrls: ['./ajout-post.component.css']
})
export class AjoutPostComponent implements OnInit {
  posts: Article[];

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  sec:number = new Date().getSeconds();
  constructor(private location: Location, private postService: PostService) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  add(titre: string, texte: string, mini_texte: string, auteur: string, urlImage: string) {

    titre = titre.trim();
    texte = texte.trim();
    mini_texte = mini_texte.trim();
    auteur = auteur.trim();
    urlImage = urlImage.trim();

    if (!titre) {
      return;
    }
    this.postService.addPost({ titre, texte, mini_texte, auteur, urlImage} as Article)
      .subscribe(post => { this.posts.push(post); });
  }
}
