import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language, LanguageNativeLabel } from '../enum/language.enum';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  language = Language;
  constructor(private translateService: TranslateService) { }
  
  useLanguage(language: string): void {
    this.translateService.use(language);
    this.translateService.resetLang(language);
  }

  getLanguageDescription(language: any){
    return LanguageNativeLabel.get(language);
  }
}
