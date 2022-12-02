import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  transform(value: any[], order :boolean, column: string = ''): any[] {
    if (!value ) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (column !== '') { 
      if(order){return value.sort()}
      else{return value.sort().reverse();}
    } // sort 1d array
    return (value);
  }
}