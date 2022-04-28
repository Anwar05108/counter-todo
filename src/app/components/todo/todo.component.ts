import { Component, OnInit } from '@angular/core';
// import { Todo } from 'src/app/models/Todo';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  // addTodo(todo: Todo) {
  //   this.todos.push(todo);
  // }

  todoTitle: string = '';
  todoDescription: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 0,
        title: 'Learn Angular',
        description: 'The best way to learn Angular',
        completed: false,
        editing: false,
        count: 0,
      },
      {
        id: 1,
        title: 'Learn React',
        description: 'The best way to learn React',
        completed: false,
        editing: false,
        count: 0,
      },
      {
        id: 2,
        title: 'Learn Vue',
        description: 'The best way to learn Vue',
        completed: false,
        editing: false,
        count: 0,
      },
    ];
  }

  // doneTodo();
  // doneTodo(todo: Todo) {
  //   todo.completed = !todo.completed;
  //   todo.count = todo.count + 1;
  // }

  doneTodo(id: number) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.count = todo.count + 1;
      }
      return todo;
    });
  }

  // deleteTodo(todo: Todo) {
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  incrementCount(id: number) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.count = todo.count + 1;
      }
      return todo;
    });
  }

  decrementCount(id: number) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.count = todo.count - 1;
      }
      return todo;
    });
  }

  addTodo(title: string, description: string) {
    console.log(title, description);
    this.todos.push({
      id: this.todos.length,
      title: title,
      description: description,
      completed: false,
      editing: false,
      count: 0,
    });
  }
}
