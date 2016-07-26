/// <reference path="../../../typings/globals/marked/index.d.ts" />
import * as marked from 'marked';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/**
 * Proof of concept
 * 
 * Reads markdown files and parses it using marked
 * 
 * @export
 * @class MarkdownService
 */
@Injectable()
export class MarkdownService {

    private slideSeparator             = '^\\n{8}'; // 8x completely empty lines --> new horizontal / slide right side
    private slideSeparatorVertical     = '^\\n{4}';  // 4x completely empty lines --> new vertical / slide down
    private handsonSeparator           = 'handsOn:';
    private elementAttributesSeparator = '\\\.element\\\s*?(.+?)$';
    private slideAttributesSeparator   = '\\\.slide:\\\s*?(\\\S.+?)$';

    private parsedMarkdown: Observable<string[][]>;

    constructor(private http: Http) {
        this.parsedMarkdown = this.http
            .get('test.md')
            .map(response => response.text())
            .map(rawMarkdown => this.splitIntoMatrix(rawMarkdown));
    }

    public getMarkdown(): Observable<string[][]> {
        return this.parsedMarkdown;
    }


    // WTF??
    /**
     * splits raw markdown into a matrix of horizontal and vertical markdown files
     * 1st level: horizontal
     * 2nd level: vertical
     * 
     * @param {string} markdown
     * @returns seperated markdown
     */
    private splitIntoMatrix(markdown: string): string[][] {

        // unify to unix LF
        markdown = markdown.replace(/(\r\n|\r)/g, '\n');

        let separatorRegex = new RegExp(this.slideSeparator +  '|' + this.slideSeparatorVertical, 'mg'),
            horizontalSeparatorRegex = new RegExp(this.slideSeparator);

        let matches: RegExpExecArray,
            lastIndex = 0,
            isHorizontal: boolean,
            wasHorizontal = true,
            content: string,
            stack: string[][] = new Array<Array<string>>();

        // iterate until all blocks between separators are stacked up
        while (matches = separatorRegex.exec(markdown)) {

            // determine direction (horizontal by default)
            isHorizontal = horizontalSeparatorRegex.test(matches[0]);

            // create vertical stack
            if (!isHorizontal && wasHorizontal) {
                stack.push([]);
            }

            // pluck slide content from markdown input
            content = markdown.substring(lastIndex, matches.index);
            content = this.splitHandsOn(content);
            content = marked (content);

            if (isHorizontal && wasHorizontal ) {
                // add to horizontal stack
                stack[stack.length].push(content);
            } else {
                // add to vertical stack
                stack[stack.length - 1].push(content);
            }

            lastIndex = separatorRegex.lastIndex;
            wasHorizontal = isHorizontal;
        }

        // add the remaining slide
        (wasHorizontal ? stack[stack.length] : stack[stack.length - 1]).push( markdown.substring( lastIndex ) );

        return stack;
    }

    // TODO!
    private splitHandsOn(content) {

        return content;

    }
}
