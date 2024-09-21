import ng_pt from '@angular/common/locales/pt';
import ng_en from '@angular/common/locales/en';
import ng_es from '@angular/common/locales/es';

export enum Language {
  Portuguese = 'pt-br',
  English = 'en',
  Spanish = 'es'
}

export const LanguageNativeLabel = new Map<Language, string>([
  [Language.Portuguese, 'Português'],
  [Language.English, 'English'],
  [Language.Spanish, 'Español']
]);

export const LanguageToNgLanguage = new Map<Language, any>([
  [Language.Portuguese, ng_pt],
  [Language.English, ng_en],
  [Language.Spanish, ng_es]
]);
