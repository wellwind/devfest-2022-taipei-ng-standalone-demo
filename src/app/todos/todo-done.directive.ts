import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTodoDone]'
})
export class TodoDoneDirective {
  // TODO: 完成 todo-with-done.pipe.ts
  @Input() set appTodoDone(todo: any) {
    this.textDecoration = todo.completed ? 'line-through' : 'none';
  }

  @HostBinding('style.text-decoration') textDecoration = 'none';

  constructor() { }

}

