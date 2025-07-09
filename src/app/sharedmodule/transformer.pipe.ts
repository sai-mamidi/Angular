import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformer'
})
export class TransformerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args)
    return value ? args?.[0] == 'Upper' ? value.toUpperCase() : value.toLowerCase() : null;
  }

}
