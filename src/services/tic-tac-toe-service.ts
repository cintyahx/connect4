import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Players } from "src/app/models/players.model";
import { environment } from "src/environments/environment";

@Injectable()
export class TicTacToeService {
  constructor(private http: HttpClient) {}

  createGame(players: Players): Observable<any> {
    return this.http
      .post<any>(`${environment.backend}/TicTacToe`, players)
      .pipe(shareReplay());
  }

  getBoard(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/TicTacToe`)
      .pipe();
  }
  
  getCurrentPlayer(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/TicTacToe/current-player`)
      .pipe(shareReplay());
  }
   
  getWinner(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/TicTacToe/winner`)
      .pipe();
  }
   
  getIsOver(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/TicTacToe/is-over`)
      .pipe();
  }
   
  dropDisc(column: number, row: number, color: string): Observable<any> {    

    return this.http
      .post<any>(`${environment.backend}/TicTacToe/drop-disc`, { column, row, color })
      .pipe();
  }
}