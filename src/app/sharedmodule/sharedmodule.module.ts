import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { RequesterService } from './requester.service';
import { HighlighterDirective } from './highlighter.directive';



@NgModule({
  declarations: [AsideMenuComponent, HighlighterDirective],
  imports: [
    CommonModule
  ],
  exports: [AsideMenuComponent,HighlighterDirective]
})
export class SharedModule { }
