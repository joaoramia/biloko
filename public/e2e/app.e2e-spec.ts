import { StandupPage } from './app.po';

describe('standup App', function() {
  let page: StandupPage;

  beforeEach(() => {
    page = new StandupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
