import { Component } from '@angular/core';
import { PagetitleDirective } from '../directives/pagetitle.directive';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../../models/IAllProducts';
import { PricePipe } from "../pipes/price.pipe";

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [PagetitleDirective, PricePipe, RouterLink]
})
export class SearchComponent {

  q = ''
  arr:Product[] = []
  constructor( 
    private activeRouter: ActivatedRoute, 
    private router: Router,
    private api: ApiService
  ) {
    this.activeRouter.queryParams.forEach(params => {
      this.q = params['q']
    })
    if (this.q == '') {
      this.router.navigate(['/dashboard'])
    }else {
      // Service Call
      const newThis = this
      this.api.searchProduct(this.q).subscribe({
        next(value) {
          newThis.arr = value.products
        },
        error(err) {
          
        },
      })
    }
  }

}
