import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;

  constructor(private productsvc: ProductService, private router: Router, private route: ActivatedRoute) { }

  save(): void{
    console.log("saved", this.product);
    this.productsvc.change(this.product).subscribe({
      next: res => {
        console.log("Product changed successfully!");
        this.router.navigateByUrl("/products/list");
      },
      error: err => {
        console.error(err);
      }
    })
  }

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
