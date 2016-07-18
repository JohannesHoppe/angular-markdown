import { AngularMarkdownPage } from './app.po';

describe('angular-markdown App', function() {
  let page: AngularMarkdownPage;

  beforeEach(() => {
    page = new AngularMarkdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
