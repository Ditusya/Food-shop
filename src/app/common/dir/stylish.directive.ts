import { Directive } from '@angular/core';

@Directive({
  selector: '[appStylish]'
})
export class StylishDirective {

  constructor() {
    console.log('StylishDirective was called');
  }

}
