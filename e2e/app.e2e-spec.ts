import { HackjamAngularPage } from './app.po';

describe('hackjam-angular App', () => {
  let page: HackjamAngularPage;

  beforeEach(() => {
    page = new HackjamAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
