import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1:any = {productId:1, productName:'Bardak', categoryId:1, unitPrice:20}
  product2:any = {productId:2, productName:'Mouse', categoryId:2, unitPrice:20}
  product3:any = {productId:3, productName:'Camera', categoryId:3, unitPrice:20}
  product4:any = {productId:4, productName:'Klavye', categoryId:4, unitPrice:20}
  product5:any = {productId:5, productName:'Telefon', categoryId:5, unitPrice:20}
  
  products = [this.product1, this.product2, this.product3, this.product4, this.product5];


  constructor() { }

  ngOnInit(): void {
  }

}
