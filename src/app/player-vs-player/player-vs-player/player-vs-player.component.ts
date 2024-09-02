import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-vs-player',
  templateUrl: './player-vs-player.component.html',
  styleUrls: ['./player-vs-player.component.scss']
})
export class PlayerVsPlayerComponent implements OnInit {
@ViewChild(BoardComponent) boardComponent!:BoardComponent
  restart(){
    this.boardComponent.restart()
  }

  winner = "";
  menuOpened = false;  
  subs = new Subscription();
  player1Name: string | null = '';
  player2Name: string | null = '';

  getWinner(winner:string){
    this.winner = winner;
  }
  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }
  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("class","main-menu-background");
    } else {
      document.body.setAttribute("class","background-pvp-rules");
    }

    this.player1Name = sessionStorage.getItem('player1Name');
    this.player2Name = sessionStorage.getItem('player2Name');
  }
}
