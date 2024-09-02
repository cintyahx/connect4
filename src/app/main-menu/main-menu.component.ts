import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  private namePlayer1: string= '';

  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("class","main-menu-background");
      
    } else {
      document.body.setAttribute("class","background-pvp-rules");
    }
  }
}
