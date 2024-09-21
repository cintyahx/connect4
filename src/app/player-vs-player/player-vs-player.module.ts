import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerVsPlayerComponent } from './player-vs-player/player-vs-player.component';
import { PlayerVsPlayerRoutingModule } from './player-vs-player-routing.module';
import { BoardComponent } from './board/board.component';
import { PauseMenuComponent } from './pause-menu/pause-menu.component'
import { GameService } from 'src/services/gameService';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerIconComponent } from '../player/player-icon/player-icon.component';
import { PlayerBottomMarkerComponent } from '../player/player-bottom-marker/player-bottom-marker.component';
import { PlayerTopMarkerComponent } from '../player/player-top-marker/player-top-marker.component';
import { PlayerCounterComponent } from '../player/player-counter/player-counter.component';


@NgModule({
  declarations: [
    PlayerVsPlayerComponent,
    BoardComponent,
    PauseMenuComponent,
    PlayerIconComponent,
    PlayerBottomMarkerComponent,
    PlayerTopMarkerComponent,
    PlayerCounterComponent
  ],
  imports: [
    CommonModule,
    PlayerVsPlayerRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [GameService],
})
export class PlayerVsPlayerModule { }
