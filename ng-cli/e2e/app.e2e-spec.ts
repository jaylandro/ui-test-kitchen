import { NgCliPage } from './app.po';

describe('ng-cli App', () => {
  let page: NgCliPage;

  beforeEach(() => {
    page = new NgCliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
