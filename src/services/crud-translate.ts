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
      this.set(Language.Portuguese);
      return;
  }

  public set(language: Language) {
    this.translate.setDefaultLang(language);
    registerLocaleData(LanguageToNgLanguage.get(language));
  }

  public get(): Language {
    return Language.Portuguese;
  }
}
