import { NgIf, AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <div *ngIf="todoItem$ | async as todoItem">
      <p><strong>Title</strong>: {{ todoItem.title }}</p>
      <p><strong>Completed</strong>: {{ todoItem.completed }}</p>
    </div>
  `,
  styles: [],
})
export default class SingleTodoComponent {
  todoItem$ = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('id')),
    switchMap((id) =>
      this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    )
  );

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
}
