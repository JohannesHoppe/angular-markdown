import { Component, OnInit } from '@angular/core';
import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MdInput } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';


@Component({
  selector: 'app-material-test',
  templateUrl: 'material-test.component.html',
  styleUrls: ['material-test.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdCheckbox,
    MD_GRID_LIST_DIRECTIVES,
    MdInput,
    MD_LIST_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_SLIDE_TOGGLE_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MdIcon,
    MD_BUTTON_DIRECTIVES
  ],
  providers: [MdUniqueSelectionDispatcher, MdIconRegistry]
})
export class MaterialTestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}