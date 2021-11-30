import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute, private productsvc: ProductService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.productsvc.getByPk(id).subscribe({
      next: res => {
        this.product = res;
        console.log(res);
      }
    });
  }

}
