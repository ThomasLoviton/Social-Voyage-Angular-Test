import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../model/article';
import { Commentaire } from '../model/commentaire';
import { CommentService } from '../service/comment.service';


@Component({
  selector: 'app-modifier-comment',
  templateUrl: './modifier-comment.component.html',
  styleUrls: ['./modifier-comment.component.css']
})
export class ModifierCommentComponent implements OnInit {

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'info', 'dark'];
  colorsInverse = ['#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#254775', '#61B5D9', '#005249', '#822900', '#E69C24', '#857555', '#E89B26', '#822900', '#E69C24'];
  sec:number = new Date().getSeconds();
  article : Article;
  commentaire : Commentaire;
  constructor(private location: Location, private commentService: CommentService, private route: ActivatedRoute,) { }

  ngOnInit() {
this.getComment();

  }

  goBack(): void {
this.location.back();
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('idC');
    this.commentService.getComment(this.getArticleId(), id)
    .subscribe(commentaire => this.commentaire = commentaire);
  }

  modifyComment(idA: number, idC: number, texte: string, auteur: string): void {

    texte = texte.trim();
    auteur = auteur.trim();

  this.commentService.modifyComment({texte, auteur} as Commentaire, idA, idC).subscribe(commentaire => this.commentaire = commentaire);
  }

  getArticleId(): number{
    const id = +this.route.snapshot.paramMap.get('id');
    return id;
  }

}
