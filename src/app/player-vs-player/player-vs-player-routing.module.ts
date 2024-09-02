import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerVsPlayerComponent } from './player-vs-player/player-vs-player.component';

const routes:Routes = [{
    path: '', component: PlayerVsPlayerComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PlayerVsPlayerRoutingModule { }