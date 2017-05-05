import { ZoostaffPage } from './app.po';

describe('zoostaff App', () => {
  let page: ZoostaffPage;

  beforeEach(() => {
    page = new ZoostaffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
