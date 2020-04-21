import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value:string, chars:string): string {
    return value.replace(chars,' ');
  }

}
