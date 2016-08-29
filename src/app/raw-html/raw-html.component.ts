import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-raw-html',
  template: '<div [innerHTML]="html"></div>'
})
export class RawHtmlComponent {
  @Input() public html: string;
}
