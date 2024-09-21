import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import { Language, LanguageToNgLanguage } from 'src/app/enum/language.enum';

@Injectable({
  providedIn: 'root',
})
export class CrudTranslateService {
  constructor(
    private translate: TranslateService
  ) {}

  public detectCurrent() {
    
    //let lang = document.documentElement.lang;
    //let lang = this.translate.currentLang;
    //let indexOfLang = Object.values(Language).indexOf(lang as unknown as Language);
    //let keyLang = Object.keys(Language)[indexOfLang];

    this.translate.use(this.translate.currentLang);
    return;
  }

  public set(language: Language) {
    //registerLocaleData(LanguageToNgLanguage.get(language));
    this.translate.use
  }
}
