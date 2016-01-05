import {Component, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app',
  template: `<h1> hello angular </h1> `
})

class HelloAngular implements OnInit  {
  constructor() { console.log('constructor called'); }
  ngOnInit() { console.log('component initialized'); }
}

bootstrap(HelloAngular, []);
