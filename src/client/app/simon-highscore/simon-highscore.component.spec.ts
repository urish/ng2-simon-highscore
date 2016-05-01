import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {SimonHighscoreComponent} from './simon-highscore.component';

describe('SimonHighscore Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(SimonHighscoreComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
