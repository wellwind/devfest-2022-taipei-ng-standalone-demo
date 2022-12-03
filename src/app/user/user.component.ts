import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      user works!
    </p>
  `,
  styles: [
  ]
})
export default class UserComponent {

}
