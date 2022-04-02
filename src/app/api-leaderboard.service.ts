import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Score, ScoreRequest, ScoreResponse} from './score-model';

@Injectable({
  providedIn: 'root'
})
export class ApiLeaderboardService {
  constructor(private http: HttpClient) { }

  url='https://ubusxe6qlj.execute-api.us-east-1.amazonaws.com/default/leaderboard'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  insertScore(score: Score): Observable<any> {    
    let scoreRequest:ScoreRequest ={
      accion:'update',
      score:score
    }

    return this.http.post<any>(this.url, scoreRequest, this.httpOptions)
      .pipe(
        catchError(this.handleError)
    );
  }

  getScores(): Observable<ScoreResponse> {
    let scoreRequest:ScoreRequest ={
      accion:'selectItem',
      score:0
    }

    return this.http.post<ScoreResponse>(this.url, scoreRequest, this.httpOptions)
      .pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}



