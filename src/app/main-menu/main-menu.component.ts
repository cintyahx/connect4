import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  colorOne = document.documentElement.style.getPropertyValue('--player-one-color');
  colorTwo = document.documentElement.style.getPropertyValue('--player-two-color');
  gameForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("class","main-menu-background");
      
    } else {
      document.body.setAttribute("class","background-pvp-rules");
    }

    this.gameForm = this.createNewGameForm();
  }  

  private createNewGameForm() {
    return this.fb.group({
      player1Name: [{ value: '', disabled: false }],
      player2Name: [{ value: '', disabled: false }],
    });
  }

  submit() {
    let player1Name = this.gameForm.get('player1Name')?.value;
    let player2Name = this.gameForm.get('player2Name')?.value;

    sessionStorage.setItem('player1Name', player1Name !== '' ? player1Name : 'Player 1');
    sessionStorage.setItem('player2Name', player2Name !== '' ? player2Name : 'Player 2');
    
    this.router.navigate(["player-vs-player"]);
  }

  playerOneChangeColor(color: any){
    document.documentElement.style.setProperty('--player-one-color', color);
  }
  
  playerTwoChangeColor(color: any){
    document.documentElement.style.setProperty('--player-two-color', color);
  }  
}
