import { Component } from '@angular/core';
import { Todo } from './Todos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string = 'Lista To-Do';
    todos: Todo[] = [];
    inputTodo: string = '';

    ngOnInit(): void {
        this.todos = [
            {
                content: 'Atividade x',
                completed: false,
            },
            {
                content: 'Atividade y',
                completed: false,
            },
            {
                content: 'Atividade z',
                completed: false,
            },
        ];
    }


    deleteTodo(id: number) {
        this.todos = this.todos.filter((v, i) => i !== id);
    }

    addTodo() {
        this.todos.push({
            content: this.inputTodo,
            completed: false,
        });

        this.inputTodo = "";
    }
}
