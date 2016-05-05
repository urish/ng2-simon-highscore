import {Component, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SimonHighscoreComponent} from './simon-highscore';
import {AngularFire, FirebaseUrl} from 'angularfire2';

// switch this to 'iot' to run against the IoT version
const FIREBASE_PREFIX = 'web';

interface ISimonGameInfo {
  playing: boolean;
  score: number;
  gameColor: string;
}

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
  spriteNumber: any;

  generateSpriteNumber() {
        this.spriteNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  constructor(af: AngularFire, @Inject(FirebaseUrl) fbUrl: string) {
    af.database.object(`/${FIREBASE_PREFIX}/gameState`).subscribe(gameState => {
      this.generateSpriteNumber();
      this.gameState = gameState;
    });
  }
}
