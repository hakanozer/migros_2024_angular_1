import { Component } from '@angular/core';
import { PagetitleDirective } from '../directives/pagetitle.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [PagetitleDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  q = ''
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
          const arr = value.products
          console.log(arr)
        },
        error(err) {
          
        },
      })
    }
  }

}
