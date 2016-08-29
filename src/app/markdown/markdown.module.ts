import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { markdownRouting } from './markdown.routing';

import { HeaderComponent }  from './header';
import { RawHtmlComponent } from './raw-html';
import { SitesComponent }   from './sites';
import { MarkdownService }  from './shared';

const moduleComponents = [HeaderComponent,
                          RawHtmlComponent,
                          SitesComponent];

@NgModule({
  imports:      [markdownRouting, CommonModule, HttpModule],
  exports:      [...moduleComponents],
  declarations: [...moduleComponents],
  providers:    [MarkdownService]
})
export class MarkdownModule { }
