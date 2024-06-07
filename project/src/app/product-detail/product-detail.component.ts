import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../../models/IAllProducts';
import { PricePipe } from "../pipes/price.pipe";
import { PagetitleDirective } from '../directives/pagetitle.directive';
import { SeoService } from '../services/seo.service';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    imports: [PricePipe, PagetitleDirective]
})
export class ProductDetailComponent {

  bigImagePath = ''
  pid = ''
  product: Product | null = null
  constructor( 
    private route: ActivatedRoute,
    private api: ApiService,
    private seo: SeoService
   ){
    this.route.paramMap.forEach(item => {
      const pullPid = item.get('pid')
      if (pullPid) {
        //this.pid = Number(pullPid)
        this.pid = pullPid
      }
    })
  }

  ngOnInit(): void {
    const newThis = this
    this.api.singleProduct(this.pid).subscribe({
      next(value) {
        newThis.product = value
        newThis.bigImagePath = value.images[0]
        newThis.seo.setTitle(value.title)
        newThis.seo.setDescription(value.description)
      },
      error(err) {
        
      },
    })
  }

  bigImageChange(path: string) {
    this.bigImagePath = path
  }

}
