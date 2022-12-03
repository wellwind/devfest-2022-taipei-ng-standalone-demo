import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { apiInterceptor } from './app/api.interceptor';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([apiInterceptor])
    ),
    provideRouter([
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full',
      },
      {
        path: 'todos',
        loadChildren: () => import('./app/todos/route'),
      },
      {
        path: 'user',
        loadComponent: () => import('./app/user/user.component'),
      },
    ]),
  ],
});
