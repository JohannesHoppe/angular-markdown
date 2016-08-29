import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { MarkdownModule } from './markdown';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations:    [AppComponent],
  entryComponents: [AppComponent],
  bootstrap:       [AppComponent],
  imports:         [BrowserModule, MarkdownModule, appRouting]
})
export class AppModule { }
