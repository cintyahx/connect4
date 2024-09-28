import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-player-counter',
    templateUrl: './player-counter.component.html'
})
export class PlayerCounterComponent {
    playerColor: string = '';

    
  @Input() player: number;  
  @Output() playerChange = new EventEmitter<number>();

  constructor(){    
    this.player = 0;
  }

  updatePlayer(value: number) {
    if (value === 2) {
        this.playerColor = 'var(--player-two-color)';
    } else {
        this.playerColor = 'var(--player-one-color)';
    }

    this.playerChange.emit(this.player);
  }
}