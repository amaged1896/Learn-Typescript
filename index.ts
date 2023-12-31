import axios, { AxiosResponse } from 'axios';
const url: string = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios({
    headers: { Accept: 'text/html, application/json, text/plain, */*' },
    proxy: undefined,
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get'
}).then((response: AxiosResponse) => {
    const todo = response.data as Todo;
    const { id, title, completed } = todo;
    logTodo(id, title, completed);
});


const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The Todo with ID: ${id}
    Has a title of: ${title}
    is it finished? ${completed}`);
};