import {Component, OnInit, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {AngularFire, FirebaseUrl} from 'angularfire2';

@Component({
  moduleId: __moduleName,
  selector: 'simon-highscore',
  templateUrl: 'simon-highscore.component.html',
  styleUrls: ['simon-highscore.component.css']
})
export class SimonHighscoreComponent implements OnInit {
  entries: Observable<any[]>;

  constructor(af: AngularFire, @Inject(FirebaseUrl) fbUrl: string) {
    let fbRef = new Firebase(fbUrl).child('leaderboard');
    this.entries = af.database.list(fbRef as Firebase);
  }

  ngOnInit() {
  }

}
