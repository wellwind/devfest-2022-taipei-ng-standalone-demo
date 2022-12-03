import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- TODO: 完成 todo-done.directive -->
    <div><a routerLink="/">Todos</a> | <a routerLink="/user">User</a></div>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, RouterLink],
  styles: []
})
export class AppComponent {
  title = 'devfest-2022-taipei-ng-standalone-demo';
}
