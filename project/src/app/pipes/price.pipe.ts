import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const item = value + '₺'
    return item;
  }

}
