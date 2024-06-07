import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../../models/IAllProducts';
import { RouterLink } from '@angular/router';
import { PricePipe } from "../pipes/price.pipe";
import { PagetitleDirective } from '../directives/pagetitle.directive';
import { SeoService } from '../services/seo.service';

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
  constructor( private api:ApiService, private seo: SeoService ) {
    const newThis = this
    api.allProducts().subscribe({
      next(value) {
        newThis.products = value.products
        seo.setTitle("Products")
        seo.setDescription("Products Page")
      },
      error(err) {
        
      },
    })
  }

  singleSelectItem( index: number ) {
    this.singleProduct = this.products[index]
  }


}
