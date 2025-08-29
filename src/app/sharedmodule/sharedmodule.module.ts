import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { RequesterService } from './requester.service';
import { HighlighterDirective } from './highlighter.directive';
import { TransformerPipe } from './transformer.pipe';
import { TruncatePipe } from './truncate-pipe';
import { ScaleDirective } from './scale-directive';



@NgModule({
  declarations: [AsideMenuComponent, HighlighterDirective, TransformerPipe, TruncatePipe, ScaleDirective],
  imports: [
    CommonModule
  ],
  exports: [AsideMenuComponent,HighlighterDirective,TransformerPipe, TruncatePipe, ScaleDirective]
})
export class SharedModule { }
