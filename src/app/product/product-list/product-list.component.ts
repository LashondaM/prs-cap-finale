import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private usrsvc: ProductService) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe(
      res => {
        console.debug("Products:", res)
        this.products = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
