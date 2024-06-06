import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  pid = ''
  constructor( private route: ActivatedRoute ){
    this.route.paramMap.forEach(item => {
      const pullPid = item.get('pid')
      if (pullPid) {
        //this.pid = Number(pullPid)
        this.pid = pullPid
      }
    })
  }

  ngOnInit(): void {
    console.log('pid', this.pid)
  }

}
