import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  createGame(): Observable<any> {
    return this.http
      .post<any>(`${environment.backend}/createGame`,{});
  }

  getBoard(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/getBoard`)
      .pipe();
  }
  
  getCurrentPlayer(): Observable<any> {
    return this.http
      .get<any>(`${environment.backend}/current-player`)
      .pipe();
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
      .post<any>(`${environment.backend}/$drop-disc`, column)
      .pipe(res => {
        return res;
    });
  }
}