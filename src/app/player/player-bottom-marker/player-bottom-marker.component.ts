import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-bottom-marker',
  templateUrl: './player-bottom-marker.component.html'
})
export class PlayerBottomMarkerComponent {
  private _playerColor: string = 'var(--player-one-color)'; // Cor padrão


  @Input()
  set player(value: number) {
        if (value === 2) {
            this._playerColor = 'var(--player-two-color)';
        } else {
            this._playerColor = 'var(--player-one-color)';
        }
    }

  get playerColor(): string {
    return this._playerColor;
  }
}