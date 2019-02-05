import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from '../service/comment.service';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../model/commentaire';
import { LikeService } from '../service/like.service';
import { Like } from '../model/like';
import { Observable } from 'rxjs';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentaires: Commentaire[];

  constructor(private route: ActivatedRoute,private commentService: CommentService, private likeService: LikeService) { }

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  sec:number = new Date().getSeconds();
  today: number = Date.now();
  nbLikes ;
  like:Like;

  @Input() article_id:number;
  
  ngOnInit() {
    this.getComments();
    this.getArticleId();
    this.getCommentaireId();
    this.getLikes();
  }
 
  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getComments(id)
      .subscribe(commentaires=> this.commentaires = commentaires);
  }

  addLike(idArticle: number, idCommentaire: number, nombre: number) {

    this.likeService.addLike( {idArticle, idCommentaire, nombre} as Like ).subscribe(nbLikes => this.nbLikes = nbLikes);
  }

  getArticleId(): number{
    const id = +this.route.snapshot.paramMap.get('id');
    return id;
  }

  getCommentaireId(): number{
    const id = +this.route.snapshot.paramMap.get('idC');
    return id;
  }

  getLikes(){
    this.likeService.getLikes(this.article_id).subscribe(nbLikes => {
       this.nbLikes = nbLikes
    });
  }

}
