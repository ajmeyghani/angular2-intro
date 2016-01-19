/**
 * Import Component Metdata class and bootstrap method.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Import our pipes
 */
import {UnitPipe} from './unit.pipe';
import {RoundPipe} from './round.pipe';

/**
 * Define the app component
 */
@Component({
  selector: 'app',
  pipes: [UnitPipe, RoundPipe], // registering our pipe with the component.
  templateUrl : 'templates/basic-pipe.tpl.html',
})

/**
 * app component class.
 */
class BasicPipeExample  {}

/**
 * Bootstrap the app.
 */
bootstrap(BasicPipeExample, []);
