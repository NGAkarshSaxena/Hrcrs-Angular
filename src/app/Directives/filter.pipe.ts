import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], keyword: string): any {
    if (!data || !keyword) {
      return data;
    }
    return data.filter((res) => {
      
      return (res.ForeName.toLocaleLowerCase().match(
        keyword.toLocaleLowerCase()
      ) || res.PhoneNumber.toLocaleLowerCase().match(
        keyword.toLocaleLowerCase()
      ) ||  res.Email.toLocaleLowerCase().match(
        keyword.toLocaleLowerCase()
      )

      );
    });
  }
}
