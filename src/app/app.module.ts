import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { WallComponent } from './wall/wall.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './comment/comment.component';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { ModifierPostComponent } from './modifier-post/modifier-post.component';
import { AjoutCommentComponent } from './ajout-comment/ajout-comment.component';
import { ModifierCommentComponent } from './modifier-comment/modifier-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    WallComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CommentComponent,
    AjoutPostComponent,
    ModifierPostComponent,
    AjoutCommentComponent,
    ModifierCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
