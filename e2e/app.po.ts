export class Ng2SimonLeaderboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-simon-leaderboard-app p')).getText();
  }
}
