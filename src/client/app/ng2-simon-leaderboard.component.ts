import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SimonHighscoreComponent} from './simon-highscore';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-simon-leaderboard-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'ng2-simon-leaderboard.component.html',
  styleUrls: ['ng2-simon-leaderboard.component.css'],
  directives: [ROUTER_DIRECTIVES, SimonHighscoreComponent],
  pipes: []
})
@RouteConfig([
])
export class Ng2SimonLeaderboardApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
