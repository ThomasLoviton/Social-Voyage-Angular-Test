import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../model/article';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {
private httpOptions = {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost/social_voyage/web/index.php';

  getPosts (): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + '/api/blog/');//'http://localhost/social-symfony/public/post/'
  }

  deletePost(id: number){
    return this.http.get(this.apiUrl + '/api/blog/' + id + '/delete');
  }

  getPost(id: number): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + '/api/blog/' + id);
  }

  getPostsLastUpdate (): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + '/api/blog/lastUpdate');
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  
  addPost (post: Article): Observable<Article> {

    let body = `titre=${post.titre}&texte=${post.texte}&mini_texte=${post.mini_texte}&auteur=${post.auteur}&urlImage=${post.urlImage}`;
    
    return this.http.post<Article>(this.apiUrl + '/api/post', body, this.httpOptions).pipe(
      catchError(this.handleError('addPost', post))
    );;
  }

  modifyPost (post: Article, id: number): Observable<Article> {

    let body = `titre=${post.titre}&texte=${post.texte}&mini_texte=${post.mini_texte}&auteur=${post.auteur}&urlImage=${post.urlImage}`;
    
    return this.http.post<Article>(this.apiUrl + '/api/post/' + id, body, this.httpOptions).pipe(
      catchError(this.handleError('addPost', post))
    );;
  }

}
