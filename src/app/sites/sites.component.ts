import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { MarkdownService, Site } from '../shared/';
import { RawHtmlComponent } from '../raw-html/';

@Component({
  moduleId: module.id,
  selector: 'app-sites',
  templateUrl: 'sites.component.html',
  styleUrls: ['sites.component.css'],
  directives: [ROUTER_DIRECTIVES, RawHtmlComponent],
  providers: [MarkdownService]
})
export class SitesComponent implements OnInit {

  private horizontalSite: number = 1;
  private verticalSite: number = 1;
  private stack: Site[][];

  constructor(private markdownService: MarkdownService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.markdownService
      .getSites()
      .subscribe((stack) => this.stack = stack);

    this.route.params
      .subscribe((params) => {
        this.horizontalSite = +params['horizontalSite'];
        this.verticalSite = +params['verticalSite'];
      });
  }

  get current(): Site {

    if (!this.stack) {
      return new Site('Loading...', '');
    }

    let i1 = this.horizontalSite - 1;
    let i2 = this.verticalSite - 1;

    if (!this.stack[i1] ||
        !this.stack[i1][i2]) {
      return new Site('<h1>404</h1>', '');
    }

    return this.stack[i1][i2];
  }
}
