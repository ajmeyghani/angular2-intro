import {Component, Pipe, PipeTransform} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Pipe({
  name: 'myfilter'
})
class MyFilter implements PipeTransform {
  transform(input: any, args: any[]) {
    if (args.length) {
      var titleToFilter = args[0].title;
      return input.filter(item => item.title !== titleToFilter);
    } else {
      return input.filter(item => item.id < 3);
    }
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  pipes: [MyFilter]
})
class ListFiltering  {
  private name: string;
  private items: any[];
  constructor () {
    this.name = 'Filter a List';
    this.items = [
      {id: 1, title: 'first'},
      {id: 2, title: 'second'},
      {id: 3, title: 'third'},
      {id: 4, title: 'forth'}
    ];
  }
}

/**
 * Bootstrap the app with `ListFiltering`.
 */
bootstrap(ListFiltering, []);
