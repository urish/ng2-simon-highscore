import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2SimonLeaderboardApp} from '../app/ng2-simon-leaderboard.component';

beforeEachProviders(() => [Ng2SimonLeaderboardApp]);

describe('App: Ng2SimonLeaderboard', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2SimonLeaderboardApp], (app: Ng2SimonLeaderboardApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2SimonLeaderboardApp], (app: Ng2SimonLeaderboardApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

