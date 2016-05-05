import {Component, Input, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: __moduleName,
  selector: 'simon-highscore',
  templateUrl: 'simon-highscore.component.html',
  styleUrls: ['simon-highscore.component.css']
})
export class SimonHighscoreComponent implements OnInit {
  @Input() games: Observable<ISimonScoreInfo[]>;
  private highscore: number;

  ngOnInit() {
    this.games.subscribe(games => {
      this.highscore = 0;
      games.forEach(game => {
        if (game.score > this.highscore) {
          this.highscore = game.score;
        }
      });
    });
  }

}
