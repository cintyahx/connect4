import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageComponent } from "./language.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      LanguageComponent
    ],
    imports: [
      CommonModule,
      TranslateModule
    ],
    exports: [
      TranslateModule,
      LanguageComponent
    ],
    providers: []
  })
export class LanguageModule { }