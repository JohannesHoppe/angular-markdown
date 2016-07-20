import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MaterialTest2Component } from './material-test';
import { HeaderComponent } from './header';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, MaterialTest2Component]
})
export class AppComponent {

}
