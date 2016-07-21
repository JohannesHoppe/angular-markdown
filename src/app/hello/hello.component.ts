import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MarkdownService } from '../shared/markdown-service';

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MarkdownService]
})
export class HelloComponent implements OnInit {

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    
  }

}
