import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {PixelPipe} from './pixel.pipe';
import {RoundPipe} from './round.pipe';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  pipes: [PixelPipe, RoundPipe] // <- registering the pipe
})
class StarterTemplate  {
  private name: string;
  constructor () {
    this.name = 'Starter Template!!';
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
