import { TcuAjPage } from './app.po';

describe('tcu-aj App', () => {
  let page: TcuAjPage;

  beforeEach(() => {
    page = new TcuAjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
