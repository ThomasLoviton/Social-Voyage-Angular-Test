import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent }      from './posts/posts.component';
import { WallComponent }      from './wall/wall.component';
import { CommentComponent } from './comment/comment.component';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { ModifierPostComponent } from './modifier-post/modifier-post.component';
import { AjoutCommentComponent } from './ajout-comment/ajout-comment.component';
import { ModifierCommentComponent } from './modifier-comment/modifier-comment.component';
const routes: Routes = [
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  { path: 'wall', component: WallComponent },
  { path: 'post/:id', component: PostsComponent },
  { path: 'post/:id/modifier-comment/:idC', component: ModifierCommentComponent },
  { path: 'post/:id/ajout-comment', component: AjoutCommentComponent },
  { path: 'ajout-post', component: AjoutPostComponent },
  { path: 'modifier-post/:id', component: ModifierPostComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}