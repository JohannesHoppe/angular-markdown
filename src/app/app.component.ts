import { Component } from '@angular/core';
import { MaterialTestComponent, MaterialTest2Component } from './material-test';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MaterialTest2Component]
})
export class AppComponent {
  title = 'app works!';
}
