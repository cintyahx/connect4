import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-bottom-marker',
  standalone: true,
  templateUrl: './player-bottom-marker.component.html'
})
export class PlayerBottomMarkerComponent {
  private _playerColor: string = 'var(--player-one-color)'; // Cor padrão

  @Input() player: number;  
  @Output() playerChange = new EventEmitter<number>();

  constructor(){    
    this.player = 1;
  }

  updatePlayer(value: number): void {
    if (value === 2) {
        this._playerColor = 'var(--player-two-color)';
    } else {
        this._playerColor = 'var(--player-one-color)';
    } 

    this.playerChange.emit(this.player);
  }

  get playerColor(): string {
    return this._playerColor;
  }
}