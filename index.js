"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
(0, axios_1.default)({
    headers: { Accept: 'text/html, application/json, text/plain, */*' },
    proxy: undefined,
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get'
}).then(function (response) {
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    is it finished? ").concat(completed));
};
