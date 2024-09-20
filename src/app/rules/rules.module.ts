import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules/rules.component';
import { RulesRoutingModule } from './rules-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    TranslateModule,
  ],
  exports: [
    TranslateModule
  ],
})
export class RulesModule { }
