import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';


@Injectable()
export class TodoService {

    private todos: Todo[];
    private nextId: number;


    constructor() {
        this.todos = [
            new Todo(0, 'Make dinner tonight!', 0),
            new Todo(1, 'Fold the laundry.', 0),
            new Todo(2, 'Learn to make a React app!', 0)
        ];
    }
/*    let sObj = JSON.stringify(this.getTodos());*/

    public addTodo(text: string): void {
        if (text) {
            const todo = new Todo(this.todos.length, text, 0);
            this.todos.push(todo);
            this.nextId = this.todos.length;
            document.getElementById('input').classList.remove('inputFalse');

        } else {
            document.getElementById('input').classList.add('inputFalse');
        }
    }

    public getTodos(): Todo[] {
        return this.todos;
    }

    public removeTodo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        let count = 0;
        for (const todo of this.todos) {
            todo.id = count;
            console.log(todo);
            count = count + 1;
        }
    }


    public checkTodo(checked: number, id: number, $event): void {
        console.log($event);
        if (checked === 0) {
            /*console.log(this.todos[id]);*/
            this.todos[id].checked = 1;
            $event.target.previousElementSibling.classList.add('through');
        } else {
            this.todos[id].checked = 0;
            $event.target.previousElementSibling.classList.remove('through');
        }
    }


}
