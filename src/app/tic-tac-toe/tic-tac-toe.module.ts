import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeRoutingModule } from './tic-tac-toe.routes';
import { TranslateModule } from '@ngx-translate/core';
import { PauseMenuComponent } from '../player-vs-player/pause-menu/pause-menu.component';
import { LanguageModule } from '../language/language.component.module';
import { PlayerBottomMarkerComponent } from '../player/player-bottom-marker/player-bottom-marker.component';
import { PlayerIconComponent } from '../player/player-icon/player-icon.component';



@NgModule({
  declarations: [
    TicTacToeComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
    TranslateModule,
    PauseMenuComponent,
    PlayerIconComponent,
    LanguageModule,
    PlayerBottomMarkerComponent
  ],
  exports: [
    TranslateModule
  ]
})
export class TicTacToeModule { }
