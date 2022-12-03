import { RouterLink } from '@angular/router';
import { TodoWithDonePipe } from './todo-with-done.pipe';
import { TodoDoneDirective } from './todo-done.directive';
import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterLink, TodoDoneDirective, TodoWithDonePipe],
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <a [routerLink]="['/todos', todo.id]" [appTodoDone]="todo">{{ todo | todoWithDone }}</a>
      </li>
    </ul>
  `,
  styles: [],
})
export default class TodosComponent {
  todos$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');

  constructor(private http: HttpClient) {}
}
