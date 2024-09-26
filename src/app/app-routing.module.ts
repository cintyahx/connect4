import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TicTacToeMenuComponent } from './tic-tac-toe-menu/tic-tac-toe-menu.component';
import { HomeModeComponent } from './home-mode/home-mode.component';

const routes: Routes = [
  { 
    path: 'connect4-rules', 
    loadChildren: () => 
      import('./rules/rules.module').then((m) => m.RulesModule) 
  },
  { 
    path: 'connect4', 
    loadChildren: () =>
      import('./player-vs-player/player-vs-player.module').then(m => m.PlayerVsPlayerModule) 
  },
  { 
    path: 'tic-tac-toe', 
    loadChildren: () =>
      import('./tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule) 
  },
  { 
    path: 'connect4-menu', 
    component: MainMenuComponent 
  },
  { 
    path: 'tic-tac-toe-menu', 
    component: TicTacToeMenuComponent 
  },
  { 
    path: '', 
    component: HomeModeComponent
  },
  { 
    path: '**', 
    component: HomeModeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
