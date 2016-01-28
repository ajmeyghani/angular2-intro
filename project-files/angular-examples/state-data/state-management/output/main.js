System.register(['angular2/core', 'rxjs', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, rxjs_1, browser_1;
    var AddTodoAction, ToggleTodoAction, SetVisibilityFilter, initState, dispatcher, state, stateAndDispatcher, TodoApp, FilterLink, Todo, TodoList, AddTodo, Footer;
    /** Observable */
    function todos(initState, actions) {
        return actions.scan(function (state, action) {
            if (action instanceof AddTodoAction) {
                var newTodo = { id: action.todoId, text: action.text, completed: false };
                return state.concat([newTodo]);
            }
            else {
                return state.map(function (t) { return updateTodo(t, action); });
            }
        }, initState);
    }
    function updateTodo(todo, action) {
        if (action instanceof ToggleTodoAction) {
            // merge creates a new object using the properties of the passed in objects
            return (action.id !== todo.id) ? todo : merge(todo, { completed: !state.completed });
        }
        else {
            return todo;
        }
    }
    function filter(initState, actions) {
        return actions.scan(function (state, action) {
            if (action instanceof SetVisibilityFilter) {
                return action.filter;
            }
            else {
                return state;
            }
        }, initState);
    }
    function stateFn(initState, actions) {
        var combine = function (s) { return ({ todos: s[0], visibilityFilter: s[1] }); };
        var appStateObs = todos(initState.todos, actions).
            zip(filter(initState.visibilityFilter, actions)).map(combine);
        return wrapIntoBehavior(initState, appStateObs);
    }
    function wrapIntoBehavior(init, obs) {
        var res = new BehaviorSubject(init);
        obs.subscribe(function (s) { return res.next(s); });
        return res;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            /**
             * Actions
             */
            AddTodoAction = (function () {
                function AddTodoAction(todoId, text) {
                    this.todoId = todoId;
                    this.text = text;
                }
                return AddTodoAction;
            })();
            ToggleTodoAction = (function () {
                function ToggleTodoAction(id) {
                    this.id = id;
                }
                return ToggleTodoAction;
            })();
            SetVisibilityFilter = (function () {
                function SetVisibilityFilter(filter) {
                    this.filter = filter;
                }
                return SetVisibilityFilter;
            })();
            initState = new OpaqueToken("initState");
            dispatcher = new OpaqueToken("dispatcher");
            state = new OpaqueToken("state");
            stateAndDispatcher = [
                core_1.provide(initState, { useValue: { todos: [], visibilityFilter: 'SHOW_ALL' } }),
                core_1.provide(dispatcher, { useValue: new rxjs_1.Subject(null) }),
                core_1.provide(state, { useFactory: stateFn, deps: [new core_1.Inject(initState), new core_1.Inject(dispatcher)] })
            ];
            /**
             * Component
             */
            TodoApp = (function () {
                function TodoApp() {
                }
                TodoApp = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        template: "...",
                        providers: stateAndDispatcher
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoApp);
                return TodoApp;
            })();
            /**
             * inject
             */
            FilterLink = (function () {
                function FilterLink(state) {
                    this.state = state;
                }
                FilterLink = __decorate([
                    core_1.Component.apply(void 0, ),
                    __param(0, core_1.Inject(state)), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof rxjs_1.Observable !== 'undefined' && rxjs_1.Observable) === 'function' && _a) || Object])
                ], FilterLink);
                return FilterLink;
                var _a;
            })();
            /**
             * View
             */
            Todo = (function () {
                function Todo() {
                    this.toggle = new EventEmitter();
                }
                Object.defineProperty(Todo.prototype, "textEffect", {
                    get: function () { return this.completed ? 'line-through' : 'none'; },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Todo.prototype, "text", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Todo.prototype, "completed", void 0);
                __decorate([
                    Output(), 
                    __metadata('design:type', Object)
                ], Todo.prototype, "toggle", void 0);
                Todo = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        template: "<span (click)=\"toggle.next()\" [style.textDecoration]=\"textEffect\">\n               {{text}}\n             </span>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Todo);
                return Todo;
            })();
            /**
             * Todolist
             */
            TodoList = (function () {
                function TodoList(dispatcher, state) {
                    this.dispatcher = dispatcher;
                    this.state = state;
                }
                Object.defineProperty(TodoList.prototype, "filtered", {
                    get: function () { return this.state.map(function (s) { return getVisibleTodos(s.todos, s.visibilityFilter); }); },
                    enumerable: true,
                    configurable: true
                });
                TodoList.prototype.emitToggle = function (id) { this.dispatcher.next(new ToggleTodoAction(id)); };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "<todo *ngFor=\"#t of filtered|async\"\n                [text]=\"t.text\" [completed]=\"t.completed\"\n                (toggle)=\"emitToggle(t.id)\"></todo>",
                        directives: [Todo]
                    }),
                    __param(0, core_1.Inject(dispatcher)),
                    __param(1, core_1.Inject(state)), 
                    __metadata('design:paramtypes', [Object, (typeof (_a = typeof rxjs_1.Observable !== 'undefined' && rxjs_1.Observable) === 'function' && _a) || Object])
                ], TodoList);
                return TodoList;
                var _a;
            })();
            /**
             * Add todo
             */
            AddTodo = (function () {
                function AddTodo(dispatcher) {
                    this.dispatcher = dispatcher;
                }
                AddTodo.prototype.addTodo = function (value) { this.dispatcher.next(new AddTodoAction(nextId++, value)); };
                AddTodo = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        template: "<input #text><button (click)=\"addTodo(text.value)\">Add Todo</button>"
                    }),
                    __param(0, core_1.Inject(dispatcher)), 
                    __metadata('design:paramtypes', [Object])
                ], AddTodo);
                return AddTodo;
            })();
            /**
             * Filter todos
             */
            FilterLink = (function () {
                function FilterLink(dispatcher, state) {
                    this.dispatcher = dispatcher;
                    this.state = state;
                }
                Object.defineProperty(FilterLink.prototype, "textEffect", {
                    get: function () {
                        var _this = this;
                        return this.state.map(function (s) { return s.visibilityFilter === _this.filter ? 'underline' : 'none'; });
                    },
                    enumerable: true,
                    configurable: true
                });
                FilterLink.prototype.setVisibilityFilter = function () { this.dispatcher.next(new SetVisibilityFilter(this.filter)); };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FilterLink.prototype, "filter", void 0);
                FilterLink = __decorate([
                    core_1.Component({
                        selector: 'filter-link',
                        template: "<a href=\"#\" (click)=\"setVisibilityFilter()\"\n               [style.textDecoration]=\"textEffect|async\"><ng-content/></a>"
                    }),
                    __param(0, core_1.Inject(dispatcher)),
                    __param(1, core_1.Inject(state)), 
                    __metadata('design:paramtypes', [Object, (typeof (_a = typeof rxjs_1.Observable !== 'undefined' && rxjs_1.Observable) === 'function' && _a) || Object])
                ], FilterLink);
                return FilterLink;
                var _a;
            })();
            Footer = (function () {
                function Footer() {
                }
                Footer = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        template: "<filter-link filter=\"SHOW_ALL\">All</filter-link>\n            <filter-link filter=\"SHOW_ACTIVE\">Active</filter-link>\n            <filter-link filter=\"SHOW_COMPLETED\">Completed</filter-link>",
                        directives: [FilterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Footer);
                return Footer;
            })();
            /**
             * Root
             */
            TodoApp = (function () {
                function TodoApp() {
                }
                TodoApp = __decorate([
                    core_1.Component({
                        selector: 'ng-demo',
                        template: "\n    <add-todo></add-todo>\n    <todo-list></todo-list>\n    <footer></footer>\n  ",
                        directives: [AddTodo, TodoList, Footer],
                        providers: stateAndDispatcher
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoApp);
                return TodoApp;
            })();
            /**
             * Bootstrap the app with `StarterTemplate`.
             */
            browser_1.bootstrap(StarterTemplate, []);
        }
    }
});
//# sourceMappingURL=main.js.map