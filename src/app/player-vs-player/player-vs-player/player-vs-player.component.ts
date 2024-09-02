import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent } from '../board/board.component';

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
  }
}
