import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Ng2SimonLeaderboardApp} from './app/ng2-simon-leaderboard.component';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

// switch to 'iot' to run it against the IoT version
const FIREBASE_PREFIX = 'web';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2SimonLeaderboardApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://ngconf-simon.firebaseio.com/' + FIREBASE_PREFIX),
]);
