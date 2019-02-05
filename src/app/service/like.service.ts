import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Like } from '../model/like';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private httpOptions = {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost/social_voyage/web/index.php';

  addLike(like: Like): Observable<any> {

    let body = `nombre=${like.nombre}`;

    return this.http.post<any>(this.apiUrl + '/api/post/' + like.idArticle + '/comment/' + like.idCommentaire + '/like', body, this.httpOptions).pipe(
      catchError(this.handleError('addPost', like))
    );
  }

  getLikes(idA: number):Observable<any>{
    return this.http.get<any>(this.apiUrl + '/api/blog/' + idA + '/getlikes');
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
}
