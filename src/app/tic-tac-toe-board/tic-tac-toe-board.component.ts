import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { TicTacToeService } from 'src/services/tic-tac-toe-service';
import { Player } from '../models/player.model';
import { Players } from '../models/players.model';
import { Board } from '../models/board.model';

@Component({
  selector: 'app-tic-tac-toe-board',
  templateUrl: './tic-tac-toe-board.component.html',
  styleUrl: './tic-tac-toe-board.component.scss'
})
export class TicTacToeBoardComponent implements OnInit{
  @Output() winnerOutput = new EventEmitter<string>();
  
  board = 
  [
    [
      {color: ""},
      {color: ""},
      {color: ""},
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
    ],
    [
      {color: ""},
      {color: ""},
      {color: ""},
    ],
  ]
  
  roundOver = false;
  currentPlayer: Player;
  players?: Players;
  winner?: Player;

  constructor(private ticTacToeService: TicTacToeService) { 
    this.currentPlayer = {
      number: 1,
      color: 'x',
      name: '',
      isComputerPlayer: false
    }
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){    
    this.roundOver = false;
    let session = sessionStorage.getItem('isPvp') ?? 'true';
    let isPvp = JSON.parse(session.toLowerCase());

    this.players = {
      playerOne: {
        number: 1,
        name: sessionStorage.getItem('player1Name')!,
        color: "x",
        isComputerPlayer: false
      },
      playerTwo: {
        number: 2,
        name: sessionStorage.getItem('player2Name')!,
        color: "o",
        isComputerPlayer: !isPvp
      },
    };

    this.ticTacToeService.createGame(this.players)
    .pipe(
      tap(() => {
        this.getBoard()
      }))
    .subscribe();
  }

  getBoard(){
    this.ticTacToeService.getBoard()
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

  setDot(rowIndex: any, columnIndex: any){
    this.ticTacToeService.dropDisc(columnIndex, rowIndex, this.currentPlayer.color)
    .pipe(
        tap(() =>{
          this.getBoard();
        })
    ).subscribe();
  }
}
