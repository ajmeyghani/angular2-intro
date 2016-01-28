import {Component, provide, Input, Output, Inject, OpaqueToken, EventEmitter} from 'angular2/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs';
import {Observer} from 'rxjs/Observer';
import {bootstrap} from 'angular2/platform/browser';


/**
 * App state
 */
interface Todo { id: number; text: string; completed: boolean; }
interface AppState { todos: Todo[]; visibilityFilter: string; }

/**
 * Actions
 */
class AddTodoAction       { constructor(public todoId: number, public text: string){} }
class ToggleTodoAction    { constructor(public id: number){} }
class SetVisibilityFilter { constructor(public filter: string){} }

type Action = AddTodoAction|ToggleTodoAction|SetVisibilityFilter;

/** Observable */
// function todos(initState: Todo[], actions: Observable<Action>): Observable<Todo[]> {
//   return actions.scan((state, action) => {
//     if (action instanceof AddTodoAction) {
//       const newTodo = {id: action.todoId, text: action.text, completed: false};
//       return [...state, newTodo];
//     } else {
//       return state.map(t => updateTodo(t, action));
//     }
//   }, initState);
// }

function updateTodo(todo: Todo, action: Action): Todo {
  if (action instanceof ToggleTodoAction) {
    // merge creates a new object using the properties of the passed in objects
    return (action.id !== todo.id) ? todo : merge(todo, {completed: !state.completed});

  } else {
    return todo;
  }
}

function filter(initState: string, actions: Observable<Action>): Observable<string> {
  return actions.scan((state, action) => {
    if (action instanceof SetVisibilityFilter) {
      return action.filter;
    } else {
      return state;
    }
  }, initState);
}


function stateFn(initState: AppState, actions: Observable<Action>): Observable<AppState> {
  const combine = s => ({todos: s[0], visibilityFilter: s[1]});

  const appStateObs: Observable<AppState> = todos(initState.todos, actions).
    zip(filter(initState.visibilityFilter, actions)).map(combine);

  return wrapIntoBehavior(initState, appStateObs);
}

function wrapIntoBehavior(init, obs) {
  const res = new BehaviorSubject(init);
  obs.subscribe(s => res.next(s));
  return res;
}

const initState = new OpaqueToken("initState");
const dispatcher = new OpaqueToken("dispatcher");
const state = new OpaqueToken("state");

const stateAndDispatcher = [
  provide(initState, {useValue: {todos: [], visibilityFilter: 'SHOW_ALL'}}),
  provide(dispatcher, {useValue: new Subject<Action>(null)}),
  provide(state, {useFactory: stateFn, deps: [new Inject(initState), new Inject(dispatcher)]})
];




/**
 * inject
 */
@Component(...)
class FilterLink {
  constructor(@Inject(state) private state: Observable<AppState>){}
}

/**
 * View
 */
@Component({
  selector: 'todo',
  template: `<span (click)="toggle.next()" [style.textDecoration]="textEffect">
               {{text}}
             </span>`
})
class Todo {
  @Input() text: string;
  @Input() completed: boolean;
  @Output() toggle = new EventEmitter();

  get textEffect() { return this.completed ? 'line-through' : 'none'; }
}

/**
 * Todolist
 */
@Component({
  selector: 'todo-list',
  template: `<todo *ngFor="#t of filtered|async"
                [text]="t.text" [completed]="t.completed"
                (toggle)="emitToggle(t.id)"></todo>`,
  directives: [Todo]
})
class TodoList {
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>) {}

  get filtered() { return this.state.map(s => getVisibleTodos(s.todos, s.visibilityFilter)); }

  emitToggle(id) { this.dispatcher.next(new ToggleTodoAction(id)); }
}
/**
 * Add todo
 */
@Component({
  selector: 'add-todo',
  template: `<input #text><button (click)="addTodo(text.value)">Add Todo</button>`
})
class AddTodo {
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {}
  addTodo(value) { this.dispatcher.next(new AddTodoAction(nextId++, value)); }
}

/**
 * Filter todos
 */
@Component({
  selector: 'filter-link',
  template: `<a href="#" (click)="setVisibilityFilter()"
               [style.textDecoration]="textEffect|async"><ng-content/></a>`
})
class FilterLink {
  @Input() filter: string;
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>){}

  get textEffect() { return this.state.map(s => s.visibilityFilter === this.filter ? 'underline' : 'none'); }

  setVisibilityFilter() { this.dispatcher.next(new SetVisibilityFilter(this.filter)); }
}

@Component({
  selector: 'footer',
  template: `<filter-link filter="SHOW_ALL">All</filter-link>
            <filter-link filter="SHOW_ACTIVE">Active</filter-link>
            <filter-link filter="SHOW_COMPLETED">Completed</filter-link>`,
  directives: [FilterLink]
})
class Footer {}

/**
 * Root
 */
@Component({
  selector: 'ng-demo',
  template: `
    <add-todo></add-todo>
    <todo-list></todo-list>
    <footer></footer>
  `,
  directives: [AddTodo, TodoList, Footer],
  providers: stateAndDispatcher
})
class TodoApp {}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(TodoApp, []);
