//import * as marked from 'marked';
declare var marked: any;


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Site } from './';

/**
 * Reads markdown files and parses it using marked
 *
 * Splits raw markdown into a matrix of horizontal and vertical markdown sites,
 * very much inspired by reveal.js
 *
 * Example:
 *
 *    Site 1/1
 *    -- smallSeparator --
 *    Site 1/2
 *    -- smallSeparator --
 *    Site 1/3
 *    -- bigSeperator --
 *    Site 2/1
 *    -- smallSeparator --
 *    Site 2/2
 *    -- smallSeparator --
 *    Site 2/3
 *
 * @export
 * @class MarkdownService
 */
@Injectable()
export class MarkdownService {

    private bigSeperator = '^\\n{8}'; // 8x completely empty lines --> new horizontal
    private smallSeparator = '^\\n{4}';  // 4x completely empty lines --> new vertical

    // TODO: private handsonSeparator = 'handsOn:';
    // TODO: private elementAttributesSeparator = '\\\.element\\\s*?(.+?)$';
    // TODO: private slideAttributesSeparator = '\\\.slide:\\\s*?(\\\S.+?)$';

    private parsedMarkdown: Observable<Site[][]>;

    constructor(private http: Http) { }

    public getSites(): Observable<Site[][]> {

        if (!this.parsedMarkdown) {

            this.parsedMarkdown = this.http
                .get('test.md')
                .map(response => response.text())
                .map(rawMarkdown => this.splitIntoStack(rawMarkdown))
                .map(stackedRawMarkdown => stackedRawMarkdown
                    .map(markdowns => markdowns
                        .map(markdown => this.parseMarkdown(markdown))));
        }

        return this.parsedMarkdown;
    }

    /**
     * splits raw markdown into a matrix of horizontal and vertical markdown sites
     * 1st level: horizontal
     * 2nd level: vertical
     *
     * @param {string} raw Markdown
     * @returns splitted, still unparsed rawMarkdown
     */
    private splitIntoStack(rawMarkdown: string): string[][] {

        let bothSeperatorRegex = new RegExp(this.bigSeperator + '|' + this.smallSeparator, 'mg'),
            bigSeparatorRegex = new RegExp(this.bigSeperator),
            matches: RegExpExecArray,
            lastIndex = 0,
            wasBigBreak = true,
            stackedRawMarkdown: string[][] = new Array<Array<string>>();

        // unify to unix LF
        rawMarkdown = rawMarkdown.replace(/(\r\n|\r)/g, '\n');

        // iterate until all blocks between separators are stacked up
        while (matches = bothSeperatorRegex.exec(rawMarkdown)) {

            // determine direction (horizontal by default)
            let isBigBreak: boolean = bigSeparatorRegex.test(matches[0]);

            // create vertical stack
            if (!isBigBreak && wasBigBreak) {
                stackedRawMarkdown.push([]);
            }

            let rawContent: string = rawMarkdown.substring(lastIndex, matches.index);

            // add to horizontal stack
            if (isBigBreak && wasBigBreak) {
                stackedRawMarkdown[stackedRawMarkdown.length].push(rawContent);
                // add to vertical stack
            } else {
                stackedRawMarkdown[stackedRawMarkdown.length - 1].push(rawContent);
            }

            lastIndex = bothSeperatorRegex.lastIndex;
            wasBigBreak = isBigBreak;
        }

        // add the remaining site
        (wasBigBreak ? stackedRawMarkdown[stackedRawMarkdown.length] : stackedRawMarkdown[stackedRawMarkdown.length - 1])
            .push(rawMarkdown.substring(lastIndex));

        return stackedRawMarkdown;
    }

    private parseMarkdown(markdown: string): Site {
        let parsedContent: string = marked(markdown);
        return new Site(parsedContent, markdown);
    }
}
