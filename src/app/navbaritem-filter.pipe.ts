import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navBarItemFilter',
  pure: false,
})
export class NavBarItemFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item?.status === filter);
  }
}
