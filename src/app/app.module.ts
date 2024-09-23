import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpBackend, HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ColorPickerModule } from 'ngx-color-picker';
import { CrudTranslateService } from 'src/services/crud-translate';
import { CommonModule } from '@angular/common';
import { LanguageModule } from './language/language.component.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (httpBackend: HttpBackend): TranslateHttpLoader =>
            new TranslateHttpLoader(new HttpClient(httpBackend), './assets/i18n/', '.json'),
          deps: [HttpBackend],
      }
    }),
    LanguageModule
  ], 
  exports: [ColorPickerModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(translateService: CrudTranslateService) {
    translateService.detectCurrent();
  } 
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '.assets/i18n/', '.json');
}