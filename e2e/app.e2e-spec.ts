import { TwowayBindingPage } from './app.po';

describe('twoway-binding App', function() {
  let page: TwowayBindingPage;

  beforeEach(() => {
    page = new TwowayBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
