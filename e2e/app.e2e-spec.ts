import { IssWatcherPage } from './app.po';

describe('iss-watcher App', () => {
  let page: IssWatcherPage;

  beforeEach(() => {
    page = new IssWatcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Sky Watcher');
  });
});
