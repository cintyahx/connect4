import { Component, EventEmitter, Output } from '@angular/core';
import { map, tap } from 'rxjs';
import { Board } from 'src/app/models/board.model';
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
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
    ],
    [
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
    ],
    [
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
    ],
    [
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
    ],
    [
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
    ],
    [
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
    ],
    [
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0},
      {color: "", player: 0}
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
        id: 0,
        color: 'red',
        name: '',
        isComputerPlayer: false
      }
    }
    
  ngOnInit(){
    this.newGame();
  }

  newGame(){    
    let session = sessionStorage.getItem('isPvp') ?? 'true';
    let isPvp = JSON.parse(session.toLowerCase());

    this.players = {
      playerOne: {
        id: 1,
        name: sessionStorage.getItem('player1Name')!,
        color: document.documentElement.style.getPropertyValue("--player-one-color"),
        isComputerPlayer: false
      },
      playerTwo: {
        id: 2,
        name: sessionStorage.getItem('player2Name')!,
        color: document.documentElement.style.getPropertyValue("--player-two-color"),
        isComputerPlayer: !isPvp
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

  refreshBoard(board: Board){
    Array.from(board.discs).forEach((disc) => {
      this.board[disc.column][disc.row].color = disc.color
      this.board[disc.column][disc.row].player = disc.player
    });
    
    this.currentPlayer = board.currentPlayer;

    if(board.isOver){
      this.winner = board.winner;
      this.setWinner(board.winner);
    }
  }

  setWinner(winner?: Player){
    this.roundOver = true;
    this.winner = winner;
    this.winnerOutput.emit(winner?.color)
  } 

  restart(){
    this.setWinner(undefined)
    this.newGame();
  }
  
  setDot(columnIndex:number){
    this.connectFourService.dropDisc(columnIndex)
    .pipe(
        tap(() =>{
          this.getBoard();
        })
    ).subscribe();
  }
}
