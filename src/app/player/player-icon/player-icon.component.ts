import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-player-icon',
    standalone: true,
    templateUrl: './player-icon.component.html'
})
export class PlayerIconComponent {
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