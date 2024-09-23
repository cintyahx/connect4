import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules/rules.component';
import { RulesRoutingModule } from './rules-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from '../language/language.component';
import { LanguageModule } from '../language/language.component.module';

@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    TranslateModule,
    LanguageModule
  ],
  exports: [
    TranslateModule
  ],
})
export class RulesModule { }
