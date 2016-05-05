import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SimonHighscoreComponent} from './simon-highscore';
import {AngularFire} from 'angularfire2';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-simon-leaderboard-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'ng2-simon-leaderboard.component.html',
  styleUrls: ['ng2-simon-leaderboard.component.css'],
  directives: [ROUTER_DIRECTIVES, SimonHighscoreComponent]
})
@RouteConfig([
])
export class Ng2SimonLeaderboardApp {
  private gameState: ISimonGameInfo;
  private games: Observable<ISimonScoreInfo[]>;
  spriteNumber: any;

  generateSpriteNumber() {
        this.spriteNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  constructor(af: AngularFire) {
    af.database.object(`/gameState`).subscribe(gameState => {
      this.generateSpriteNumber();
      this.gameState = gameState;
    });
    this.games = af.database.list(`/games`);
  }
}
