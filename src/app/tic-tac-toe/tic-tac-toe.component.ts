import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '../models/player.model';
import { TicTacToeService } from 'src/services/tic-tac-toe-service';
import { tap } from 'rxjs';
import { TicTacToeBoardComponent } from '../tic-tac-toe-board/tic-tac-toe-board.component';

@Component({
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent implements OnInit{
  @ViewChild(TicTacToeBoardComponent) boardComponent!:TicTacToeBoardComponent

  menuOpened = false;  
  player1Name: string | null = '';
  player2Name: string | null = '';
  winner = "";

  restart(){
    this.boardComponent.restart()
  }
  
  getWinner(winner:string){
    this.winner = winner;
  }
  
  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }
  
  ngOnInit(){
      document.body.setAttribute("class","background-pvp-rules");

      this.player1Name = sessionStorage.getItem('player1Name');
      this.player2Name = sessionStorage.getItem('player2Name');
  }
}
