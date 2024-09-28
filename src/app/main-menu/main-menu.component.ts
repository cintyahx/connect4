import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  colorOne = document.documentElement.style.getPropertyValue('--player-one-color');
  colorTwo = document.documentElement.style.getPropertyValue('--player-two-color');
  gameForm!: FormGroup;
  isPvp = false;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService) { }

  ngOnInit(){
    document.body.setAttribute("class","main-menu-background");
    document.documentElement.style.setProperty('--player-one-color', '#FD6687');
    document.documentElement.style.setProperty('--player-two-color', '#32CD32');

    this.gameForm = this.createNewGameForm();
  }  

  private createNewGameForm() {
    return this.fb.group({
      player1Name: [{ value: '', disabled: false }],
      player2Name: [{ value: '', disabled: true }],
    });
  }

  submit() {
    let player1Name = this.gameForm.get('player1Name')?.value;
    let player2Name = "";
    
    if(this.isPvp)
      player2Name = this.gameForm.get('player2Name')?.value;
    else
      player2Name = this.translate.instant('engine');

    sessionStorage.setItem('player1Name', player1Name !== '' ? player1Name : 'Player 1');
    sessionStorage.setItem('player2Name', player2Name !== '' ? player2Name : 'Player 2');
    sessionStorage.setItem('isPvp', String(this.isPvp));
    
    this.router.navigate(["connect4"]);
  }

  playerOneChangeColor(color: any){
    document.documentElement.style.setProperty('--player-one-color', color);
  }
  
  playerTwoChangeColor(color: any){
    document.documentElement.style.setProperty('--player-two-color', color);
  }   

  changePlayMode(){
    this.isPvp = !this.isPvp;

    if(this.isPvp)    
      this.gameForm.get('player2Name')?.enable();
    else{
      this.gameForm.get('player2Name')?.disable();
      this.gameForm.get('player2Name')?.setValue('');
    }
  }
}
