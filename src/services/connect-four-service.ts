import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Disc } from "src/app/models/disc.model";
import { Player } from "src/app/models/player.model";
import { Players } from "src/app/models/players.model";
import { environment } from "src/environments/environment";

@Injectable()
export class ConnectFourService {
  constructor(private http: HttpClient) {}

  createGame(players: Players): Observable<any> {
    return this.http
      .post<any>(`${environment.backend}/Connect4`, players)
      .pipe(shareReplay());
  }

  getBoard(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/Connect4`)
      .pipe();
  }
   
  dropDisc(column:number): Observable<any> {
    return this.http
      .post<any>(`${environment.backend}/Connect4/drop-disc`, column)
      .pipe();
  }
}