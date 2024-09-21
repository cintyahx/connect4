import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageComponent } from "./language.component";

@NgModule({
    declarations: [
      LanguageComponent
    ],
    imports: [
      TranslateModule
    ],
    exports: [
      TranslateModule,
    ],
    providers: []
  })
export class LanguageModule { }