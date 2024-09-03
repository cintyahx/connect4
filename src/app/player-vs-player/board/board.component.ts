import { Component, EventEmitter, Output } from '@angular/core';
import { map, tap } from 'rxjs';
import { Disc } from 'src/app/models/disc.model';
import { Player } from 'src/app/models/player.model';
import { Players } from 'src/app/models/players.model';
import { GameService } from 'src/services/gameService';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
@Output() winnerOutput = new EventEmitter<string>();
  board = 
  [
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""}
    ],
  ]

  currentPlayer: Player;
  winner?: Player;
  roundOver = false;
  players?: Players;
  discs?: Array<Disc>;

  srcMarker="assets/marker-red.svg";
  srcCounter="assets/counter-red-large.svg";
  srcBackground="assets/turn-background-red.svg";
  
  constructor(
    private gameService: GameService) { 
      this.currentPlayer = {
        color: 'red',
        name: ''
      }
    }
    
  ngOnInit(){
    this.newGame();
  }

  newGame(){    
    this.players = {
      playerOne: {
        name: sessionStorage.getItem('player1Name')!,
        color: 'red'
      },
      playerTwo: {
        name: sessionStorage.getItem('player2Name')!,
        color: 'green'
      },
    };

    this.gameService.createGame(this.players)
    .pipe(
      tap(() => {
        this.getBoard()
      }))
    .subscribe();
  }

  getBoard(){
    this.gameService.getBoard()
    .pipe(
        tap((result) =>{
          this.refreshBoard(result.data);
        })
    )
    .subscribe();
  }

  refreshBoard(element: Array<Disc>){
    element.forEach((disc) => {
      this.board[disc.column][disc.row].color = disc.color
    });
    this.getCurrentPlayer();
  }

  getCurrentPlayer(){    
    this.gameService.getCurrentPlayer()
    .pipe(        
        tap((result) =>{
          this.currentPlayer = result.data;
          this.calculateWin();
        })
      )
      .subscribe();
  }

  setDot(columnIndex:number){
    this.gameService.dropDisc(columnIndex)
    .pipe(
        tap(() =>{
          this.getBoard();
        })
    ).subscribe();
  }

  restart(){
    this.setWinner(undefined)
    this.newGame();
  }

  setWinner(winner?: Player){
    this.winner = winner;
    this.winnerOutput.emit(winner?.color)
  }  

  getWinner(){
    this.gameService.getWinner()
    .pipe(
      tap((result) => {
        this.setWinner(result.data)
    })
    )
    .subscribe();
  }

  calculateWin(){
    this.gameService.getIsOver()
    .pipe(
      tap((result) => {
        this.roundOver = result.data;
        if(result.data){
          this.getWinner();
        }
    })
    )
    .subscribe();
  }
}
