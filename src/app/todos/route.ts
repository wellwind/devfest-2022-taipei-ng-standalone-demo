import { Route } from '@angular/router';

// TODO: 在 app.component.ts 加入 router-link
export default [
  {
    path: ':id',
    loadComponent: () => import('./single-todo.component')
  },
  {
    path: '',
    loadComponent: () => import('./todos.component')
  }
] as Route[];
