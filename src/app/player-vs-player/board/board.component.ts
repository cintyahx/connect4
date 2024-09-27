import { Component, EventEmitter, Output } from '@angular/core';
import { map, tap } from 'rxjs';
import { Disc } from 'src/app/models/disc.model';
import { Player } from 'src/app/models/player.model';
import { Players } from 'src/app/models/players.model';
import { ConnectFourService } from 'src/services/connect-four-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
currentColumn: number | null = 0;

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
    private connectFourService: ConnectFourService) { 
      this.currentPlayer = {
        number: 1,
        color: 'red',
        name: '',
        isComputerPlayer: false
      }
    }
    
  ngOnInit(){
    this.newGame();
  }

  newGame(){    
    this.players = {
      playerOne: {
        number: 1,
        name: sessionStorage.getItem('player1Name')!,
        color: document.documentElement.style.getPropertyValue("--player-one-color"),
        isComputerPlayer: false
      },
      playerTwo: {
        number: 2,
        name: sessionStorage.getItem('player2Name')!,
        color: document.documentElement.style.getPropertyValue("--player-two-color"),
        isComputerPlayer: false
      },
    };

    this.connectFourService.createGame(this.players)
    .pipe(
      tap(() => {
        this.getBoard()
      }))
    .subscribe();
  }

  getBoard(){
    this.connectFourService.getBoard()
    .pipe(
        tap((result) =>{
          this.refreshBoard(result.data);
        })
    )
    .subscribe();
  }

  refreshBoard(element: Array<Disc>){
    Array.from(element).forEach((disc) => {
      this.board[disc.column][disc.row].color = disc.color
    });
    this.getCurrentPlayer();
  }

  getCurrentPlayer(){    
    this.connectFourService.getCurrentPlayer()
    .pipe(        
        tap((result) =>{
          this.currentPlayer = result.data;
          this.calculateWin();
        })
      )
      .subscribe();
  }

  setDot(columnIndex:number){
    this.connectFourService.dropDisc(columnIndex)
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
    this.connectFourService.getWinner()
    .pipe(
      tap((result) => {
        this.setWinner(result.data)
    })
    )
    .subscribe();
  }

  calculateWin(){
    this.connectFourService.getIsOver()
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
