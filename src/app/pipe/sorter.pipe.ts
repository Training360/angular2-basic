import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], key: string, dir: number): any[] {
    if (!value || !key || !Array.isArray(value)) {
      return value;
    }

    return value.sort( (a, b) => {
      return `${a[key].toLowerCase()}`.localeCompare(`${b[key].toLowerCase()}`) * dir;
    });
  }

}
