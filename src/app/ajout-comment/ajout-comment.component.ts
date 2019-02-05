import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommentService } from '../service/comment.service';

import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../model/commentaire';

@Component({
  selector: 'app-ajout-comment',
  templateUrl: './ajout-comment.component.html',
  styleUrls: ['./ajout-comment.component.css']
})
export class AjoutCommentComponent implements OnInit {

  comments: Commentaire[];

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  sec:number = new Date().getSeconds();
  constructor(private route: ActivatedRoute,private location: Location, private commentService: CommentService) { }

  ngOnInit() {
    this.getArticleId();
  }
  goBack(): void {
    this.location.back();
  }
  addComment(id: number, texte: string, auteur: string) {

    texte = texte.trim();
    auteur = auteur.trim();

    this.commentService.addComment({texte, auteur} as Commentaire, id)
    .subscribe();
  }

  getArticleId(): number{
    const id = +this.route.snapshot.paramMap.get('id');
    return id;
  }

}
