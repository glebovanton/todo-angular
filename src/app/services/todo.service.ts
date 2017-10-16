import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';


@Injectable()
export class TodoService {

    private todos: Todo[];
    private nextId: number;


    constructor() {
        this.todos = JSON.parse(localStorage.getItem('myCoolArrayOfTodos')) || [
            new Todo(0, 'Make first note!', false),
            new Todo(1, 'Understand, how it works', false),
            new Todo(2, 'Delete finished task', false)
        ];
    }

    /*    let sObj = JSON.stringify(this.getTodos());*/

    public addTodo(text: string): void {
        if (text) {
            const todo = new Todo(this.todos.length, text, false);
            this.todos.push(todo);
            this.nextId = this.todos.length;
            document.getElementById('input').classList.remove('inputFalse');

        } else {
            document.getElementById('input').classList.add('inputFalse');
        }
        localStorage.setItem('myCoolArrayOfTodos', JSON.stringify(this.todos));
    }

    public getTodos(): Todo[] {
        /*console.log(JSON.stringify(this.todos));*/
        return this.todos;
    }

    public removeTodo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        let count = 0;
        for (const todo of this.todos) {
            todo.id = count;
            count = count + 1;
        }
        localStorage.setItem('myCoolArrayOfTodos', JSON.stringify(this.todos));

    }


    public checkTodo(): void {
        console.log(this);
        localStorage.setItem('myCoolArrayOfTodos', JSON.stringify(this.todos));
    }


}
