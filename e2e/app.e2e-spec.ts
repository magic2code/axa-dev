import { AxaDevPage } from './app.po';

describe('axa-dev App', () => {
  let page: AxaDevPage;

  beforeEach(() => {
    page = new AxaDevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
