import { FirstProjectPage } from './app.po';

describe('first-project App', () => {
  let page: FirstProjectPage;

  beforeEach(() => {
    page = new FirstProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
