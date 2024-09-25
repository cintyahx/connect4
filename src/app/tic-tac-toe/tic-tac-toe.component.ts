import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent implements OnInit{
  menuOpened = false;  
  roundOver = false;
  currentPlayer: Player;
  player1Name: string | null = '';
  player2Name: string | null = '';
  
  constructor() { 
      this.currentPlayer = {
        number: 1,
        color: 'red',
        name: ''
      }
    }

  restart(){
    //this.boardComponent.restart()
  }
  
  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }
  
  ngOnInit(){
      document.body.setAttribute("class","background-pvp-rules");
  }
}
