import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent{

  pageTitle = "Page Title"
  count = 30
  btnName= ""
  email = ""

  // Object
  user = {name: 'Ali', surname: 'Bilmem', age: 25, status: true}
  users = ['Ali', 'Veli', 'Mehmet', 'Serkan', 'Zehra']
  userKey = Object.values(this.user)

  // array
  pro1: IProduct = {
    pid: 1,
    title: 'TV',
    detail: 'TV Detail',
    price: 10000,
  }

  pro2: IProduct = {
    pid: 2,
    title: 'iPhone',
    detail: 'iPhone Detail',
    price: 75000
  }

  products:IProduct[] = [
    this.pro1, this.pro2
  ]

  constructor() {
    console.log("Call - 1")
    this.pageTitle = "App Title"
    const pro1Status = this.pro1.status
    if (pro1Status) {
      console.log(pro1Status.valueOf)
    }
    
  }

  ngOnInit(): void {

    console.log("Call - 2")
    this.btnName = "Send"
    setTimeout(() => {
      this.btnName = "Send Data"
    }, 3000);

    
  }
  
  size = 0
  fncBtnNameChange() {
    this.size++
    this.btnName = "Send Data - " + this.size
  }


  changeCount(count: number) {
    this.count = count
  }

  searchFnc(evt: any) {
    console.log(evt.target.value)
  }

}
