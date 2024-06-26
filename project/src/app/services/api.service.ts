import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllProducts, Product } from '../../models/IAllProducts';
import { allProduct_url, searchProduct_url } from '../../utils/util';
import { CryptoService } from './crypto.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token = ""
  private headers = {}
  constructor( 
    private http: HttpClient, 
    private crypto: CryptoService,
    private router: Router
  ) { 
    const user = crypto.getUser()
    if (user) {
      this.token = user.token
      this.headers = {'Authorization': 'Bearer ' + this.token}
    }else {
      this.router.navigate(['/'])
    }
  }

  allProducts() {
    return this.http.get<IAllProducts>(allProduct_url, {headers: this.headers})
  }

  singleProduct(pid: string) {
    const path = '/'+pid
    return this.http.get<Product>(allProduct_url+path)
  }

  searchProduct(q: string) {
    return this.http.get<IAllProducts>(searchProduct_url+q)
  }


}
