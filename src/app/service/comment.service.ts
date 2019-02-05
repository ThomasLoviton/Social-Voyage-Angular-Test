import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Commentaire } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private httpOptions = {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost/social_voyage/web/index.php';

  getComments(id: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.apiUrl + '/api/blog/' + id + '/comment');
  }

  getComment(idA: number, idC: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(this.apiUrl + '/api/blog/' + idA + '/comment/' + idC);
    
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
  
  addComment(comment: Commentaire, id: number): Observable<Commentaire> {

    let body = `texte=${comment.texte}&auteur=${comment.auteur}`;
    
    return this.http.post<Commentaire>(this.apiUrl + '/api/post/' + id + '/comment', body, this.httpOptions).pipe(
      catchError(this.handleError('addPost', comment))
    );;
  }

  modifyComment(comment: Commentaire, idA: number, idC: number): Observable<Commentaire> {

    let body = `texte=${comment.texte}&auteur=${comment.auteur}`;

    return this.http.post<Commentaire>(this.apiUrl + '/api/post/' + idA + '/comment/' + idC, body, this.httpOptions).pipe(
      catchError(this.handleError('addPost', comment))
    );
  }
}
