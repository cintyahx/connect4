import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  { path: 'rules', loadChildren: () => 
  import('./rules/rules.module').then((m) => m.RulesModule) },
  { path: 'player-vs-player', loadChildren: () =>
  import('./player-vs-player/player-vs-player.module').then(m => m.PlayerVsPlayerModule) },
  { path: '', component: MainMenuComponent },
  { path: '**', component: MainMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
