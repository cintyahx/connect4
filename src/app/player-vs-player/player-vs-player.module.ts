import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerVsPlayerComponent } from './player-vs-player/player-vs-player.component';
import { PlayerVsPlayerRoutingModule } from './player-vs-player-routing.module';
import { BoardComponent } from './board/board.component';
import { PauseMenuComponent } from './pause-menu/pause-menu.component'
import { ConnectFourService } from 'src/services/connect-four-service';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerIconComponent } from '../player/player-icon/player-icon.component';
import { PlayerBottomMarkerComponent } from '../player/player-bottom-marker/player-bottom-marker.component';
import { PlayerTopMarkerComponent } from '../player/player-top-marker/player-top-marker.component';
import { PlayerCounterComponent } from '../player/player-counter/player-counter.component';
import { LanguageModule } from '../language/language.component.module';


@NgModule({
  declarations: [
    PlayerVsPlayerComponent,
    BoardComponent,
    PlayerTopMarkerComponent,
    PlayerCounterComponent
  ],
  imports: [
    CommonModule,
    PlayerVsPlayerRoutingModule,
    TranslateModule,
    PauseMenuComponent,  
    PlayerIconComponent,  
    PlayerBottomMarkerComponent,
    LanguageModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [ConnectFourService],
})
export class PlayerVsPlayerModule { }
