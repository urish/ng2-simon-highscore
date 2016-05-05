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
  private gameMetrics = {};
  private gameColors: string[] = ['green', 'red', 'blue', 'yellow'];

  generateTeamsMetrics(games) {
    for (let color of this.gameColors) {
      let high: number = 0;
      let sum: number = 0;
      let avg: string = "0.0";

      const teamScores = games.filter(game => game.color === color).map(teamGame => teamGame.score);
      if (teamScores.length) {
        high = Math.max.apply(Math, teamScores);
        sum = teamScores.reduce((a, b) =>  a + b );
        avg = (sum / teamScores.length).toFixed(1);
      }

      this.gameMetrics[color] = {
        high: high,
        sum: sum,
        avg: avg,
      }
    }

  }

  ngOnInit() {
    this.games.subscribe(games => {
      this.highscore = 0;
      this.generateTeamsMetrics(games);
      games.forEach(game => {
        if (game.score > this.highscore) {
          this.highscore = game.score;
        }
      });
    });
  }

}
