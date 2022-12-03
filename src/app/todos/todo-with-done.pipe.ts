import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'todoWithDone'
})
export class TodoWithDonePipe implements PipeTransform {

  transform(todoItem: any): unknown {
    // TODO: 完成 todos.component.ts
    return `${todoItem.title}${todoItem.completed ? '(done)' : ''}`;

    }

}
