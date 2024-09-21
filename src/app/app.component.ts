import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './enum/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'connect-four';  
  
  constructor(private translate: TranslateService) {
    this.translate.addLangs(Object.keys(Language));
    this.translate.setDefaultLang(Language.English);
    this.translate.use(Language.English);
  }
}

