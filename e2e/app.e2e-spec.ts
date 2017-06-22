import { FirstCiPage } from './app.po';

describe('first-ci App', () => {
  let page: FirstCiPage;

  beforeEach(() => {
    page = new FirstCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
