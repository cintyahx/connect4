import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from 'src/services/gameService';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
@Output() winnerOutput = new EventEmitter<string>();
  board = 
  [
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
    [
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false},
      {clicked: false, color: "none", marked: false}
    ],
  ]

  turn = "red";
  firstTurn = "red";
  winner = "";
  roundOver = false;

  
  constructor(
    private gameService: GameService) { }
    

  setDot(columnIndex:number){
    this.gameService.dropDisc(columnIndex);

    if(!this.board[columnIndex][this.board[columnIndex].length-1].clicked){
      this.board[columnIndex][this.board[columnIndex].length-1].clicked = true;
      this.board[columnIndex][this.board[columnIndex].length-1].color = this.turn
      this.calculateWin();
      this.turn = this.turn === "red" ? "green" : "red";
      return
    }
    for(let i = 0; i < this.board[columnIndex].length; i++){
      if (this.board[columnIndex][i].clicked === true){
        this.board[columnIndex][i-1].clicked = true;
        this.board[columnIndex][i-1].color = this.turn;
        this.calculateWin();
        this.turn = this.turn === "red" ? "green" : "red";
        return
      }
    }
  }

  restart(){
    this.board.forEach(column => {
      column.forEach(dot => {
        dot.clicked = false;
        dot.color = "none"
        dot.marked = false;
      })
    })
    this.firstTurn = this.firstTurn === 'red' ? 'green' : 'red';
    this.turn = this.firstTurn;
    this.setWinner("");
    this.roundOver = false;
  }

  setWinner(winner:string){
    this.winnerOutput.emit(winner)
  }

  ngOnInit(){
    this.gameService.createGame().subscribe();
  }

  ngOnDestroy(){
  }

  calculateWin(){
    //calculate column wins
    this.board.forEach(column => {
      for(let i=0;i<3;i++){
        if (column[i].color === this.turn &&
          column[i+1].color === this.turn &&
          column[i+2].color === this.turn &&
          column[i+3].color === this.turn
          ) {
           this.roundOver = true;
           this.winner = this.turn;
           this.setWinner(this.turn);
           column[i].marked = true;
           column[i+1].marked = true;
           column[i+2].marked = true;
           column[i+3].marked = true;
           }
      }
  
    })
    //calculate row wins
    for (let i=0; i < 4; i++){
      for(let j=0; j < 6; j++){
        if(this.board[i][j].color === this.turn &&
          this.board[i+1][j].color === this.turn &&
          this.board[i+2][j].color === this.turn &&
          this.board[i+3][j].color === this.turn
          ) {
            this.roundOver = true;
            this.winner = this.turn;
            this.setWinner(this.turn);
            this.board[i][j].marked = true;
            this.board[i+1][j].marked = true;
            this.board[i+2][j].marked = true;
            this.board[i+3][j].marked = true;
          }
      }
    }
    //calculate right diagonal upwards
    for (let row = 0; row < this.board.length - 3; row++) {
      for (let col = 0; col < this.board[row].length - 3; col++) {
        if (
          this.board[row][col].clicked &&
          this.board[row][col].color !== "none" &&
          this.board[row][col].color === this.turn &&
          this.board[row + 1][col + 1].color === this.turn &&
          this.board[row + 2][col + 2].color === this.turn &&
          this.board[row + 3][col + 3].color === this.turn
        ) {
        this.roundOver = true;
        this.winner = this.turn;
        this.setWinner(this.turn);
        this.board[row][col].marked = true;
        this.board[row + 1][col + 1].marked = true;
        this.board[row + 2][col + 2].marked = true;
        this.board[row + 3][col + 3].marked = true;
        } 
      }
    }

    //calculate left diagonal upwards
    for (let row = 0; row < this.board.length - 3; row++) {
      for (let col = 2; col < this.board[row].length; col++) {
        if (
          this.board[row][col].clicked &&
          this.board[row][col].color !== "none" &&
          this.board[row][col].color === this.turn &&
          this.board[row + 1][col - 1].color === this.turn &&
          this.board[row + 2][col - 2].color === this.turn &&
          this.board[row + 3][col - 3].color === this.turn 
        ) {
        this.roundOver = true;
        this.winner = this.turn;
        this.setWinner(this.turn);
        this.board[row][col].marked = true;
        this.board[row + 1][col - 1].marked = true;
        this.board[row + 2][col - 2].marked = true;
        this.board[row + 3][col - 3].marked = true;
        } 
      }
    }


  }
}
