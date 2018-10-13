import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylishDirective } from './stylish.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StylishDirective],
  exports: [StylishDirective]
})
export class DirModule { }
