import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selection'
})
export class SelectionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
