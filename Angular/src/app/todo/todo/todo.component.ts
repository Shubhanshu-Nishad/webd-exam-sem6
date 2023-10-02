import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  ngOnInit(): void {
    this.todos.push({ id: 1, title: 'Example Todo' });
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodoTitle,
      };
      this.todos.push(newTodo);
      this.newTodoTitle = ''; 
    }
    else{
      alert("Please enter some data !!!")
    }
  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
