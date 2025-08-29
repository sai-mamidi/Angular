import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform{
    transform(value: any, n = 10,...args: any[]) {
        if((!value) || (value.length <= n)) return value; 
        return value.slice(0,(n-3)).concat('...');
    }
} 

