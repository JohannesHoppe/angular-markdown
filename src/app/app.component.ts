import { Component } from '@angular/core';
import { MaterialTestComponent } from './material-test';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MaterialTestComponent]
})
export class AppComponent {
  title = 'app works!';
}
