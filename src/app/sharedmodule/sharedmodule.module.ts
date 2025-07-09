import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { RequesterService } from './requester.service';
import { HighlighterDirective } from './highlighter.directive';
import { TransformerPipe } from './transformer.pipe';



@NgModule({
  declarations: [AsideMenuComponent, HighlighterDirective, TransformerPipe],
  imports: [
    CommonModule
  ],
  exports: [AsideMenuComponent,HighlighterDirective,TransformerPipe]
})
export class SharedModule { }
