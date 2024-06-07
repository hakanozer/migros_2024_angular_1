import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../../models/IAllProducts';
import { RouterLink } from '@angular/router';
import { PricePipe } from "../pipes/price.pipe";
import { PagetitleDirective } from '../directives/pagetitle.directive';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [RouterLink, PricePipe, PagetitleDirective]
})
export class DashboardComponent {

  products:Product[] = []
  singleProduct: Product | null = null
  constructor( private api:ApiService ) {
    const newThis = this
    api.allProducts().subscribe({
      next(value) {
        newThis.products = value.products
      },
      error(err) {
        
      },
    })
  }

  singleSelectItem( index: number ) {
    this.singleProduct = this.products[index]
  }


}
