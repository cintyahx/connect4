import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Disc } from "src/app/models/disc.model";
import { Player } from "src/app/models/player.model";
import { Players } from "src/app/models/players.model";
import { environment } from "src/environments/environment";

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  createGame(players: Players): Observable<any> {
    return this.http
      .post<any>(`${environment.backend}`, players)
      .pipe(shareReplay());
  }

  getBoard(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}`)
      .pipe();
  }
  
  getCurrentPlayer(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/current-player`)
      .pipe(shareReplay());
  }
   
  getWinner(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/winner`)
      .pipe();
  }
   
  getIsOver(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/is-over`)
      .pipe();
  }
   
  dropDisc(column:number): Observable<any> {
    return this.http
      .post<any>(`${environment.backend}/drop-disc`, column)
      .pipe();
  }
}