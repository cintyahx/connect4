import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pause-menu',
  standalone: true,
  templateUrl: './pause-menu.component.html',
  styleUrls: ['./pause-menu.component.scss'],
  imports: [TranslateModule]
})
export class PauseMenuComponent {
constructor(private router:Router){}
@Output() continueOutput = new EventEmitter();
@Output() restartOutput = new EventEmitter();


onContinueClick(){
  this.continueOutput.emit()
}
onRestartClick(){
  this.continueOutput.emit()
  this.restartOutput.emit()
}
quitGame(){
  this.router.navigate(['/']);
}

}
