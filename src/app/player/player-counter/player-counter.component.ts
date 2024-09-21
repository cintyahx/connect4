import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-player-counter',
    templateUrl: './player-counter.component.html'
})
export class PlayerCounterComponent {
    private _playerColor: string = 'var(--player-one-color)';

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