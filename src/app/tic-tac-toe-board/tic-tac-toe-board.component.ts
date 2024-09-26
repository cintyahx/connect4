import { Component, EventEmitter, Output } from '@angular/core';
import { tap } from 'rxjs';
import { TicTacToeService } from 'src/services/tic-tac-toe-service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-tic-tac-toe-board',
  templateUrl: './tic-tac-toe-board.component.html',
  styleUrl: './tic-tac-toe-board.component.scss'
})
export class TicTacToeBoardComponent {
  @Output() winnerOutput = new EventEmitter<string>();
  roundOver = false;
  currentPlayer: Player;
  winner?: Player;

  constructor(
    private ticTacToeService: TicTacToeService) { 
      this.currentPlayer = {
        number: 1,
        color: 'red',
        name: ''
      }
    }

  
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

  restart(){
    //this.boardComponent.restart()
  }

  setDot(rowIndex: number, columnIndex: number){
    this.ticTacToeService.dropDisc(columnIndex, rowIndex)
    .pipe(
        tap(() =>{
        })
    ).subscribe();
  }
}
