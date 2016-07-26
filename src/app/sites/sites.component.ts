import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MarkdownService } from '../shared/markdown-service';
import { RawHtmlComponent } from '../raw-html';

@Component({
  moduleId: module.id,
  selector: 'app-sites',
  templateUrl: 'sites.component.html',
  styleUrls: ['sites.component.css'],
  directives: [ROUTER_DIRECTIVES, RawHtmlComponent],
  providers: [MarkdownService]
})
export class SitesComponent implements OnInit {

  private stack: string[][];
  private content: string;

  constructor(private markdownService: MarkdownService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let i1 = params['i1'];
      let i2 = params['i2'];

      this.markdownService
        .getMarkdown()
        .subscribe((stack: string[][] ) => {
          this.stack = stack;
          this.showMarkdown(stack, i1, i2);
        });
    });
  }

  private showMarkdown(stack: string[][], i1: number, i2: number) {

    if (!i1 && !i2) {
      this.content = '';
      return;
    }

    this.content = stack[i1][i2];
  }
}
