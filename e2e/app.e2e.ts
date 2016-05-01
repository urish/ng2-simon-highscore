import { Ng2SimonLeaderboardPage } from './app.po';

describe('ng2-simon-leaderboard App', function() {
  let page: Ng2SimonLeaderboardPage;

  beforeEach(() => {
    page = new Ng2SimonLeaderboardPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-simon-leaderboard Works!');
  });
});
