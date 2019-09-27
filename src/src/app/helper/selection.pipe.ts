import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'selection'
})
export class SelectionPipe implements PipeTransform {

  transform(value: number, list: string[]): any {
    return list[value-1];
  }
}
