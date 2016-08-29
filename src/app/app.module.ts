import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { MarkdownModule } from './markdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations:    [AppComponent],
  entryComponents: [AppComponent],
  bootstrap:       [AppComponent],
  imports:         [BrowserModule, MarkdownModule],
})
export class AppModule { }
