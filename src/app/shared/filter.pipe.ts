import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from '../home/restaurants/restaurant.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Restaurant[], searchText: string): any[] {
    console.log('At FIlterPipe: ', searchText);
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    return value.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.cuisine.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }
}
