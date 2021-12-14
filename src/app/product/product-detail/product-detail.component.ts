import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  verifyDelete: boolean = false;

  product!: Product;

  constructor(private route: ActivatedRoute, private productsvc: ProductService, private router: Router) { }

  delete(): void{
    this.verifyDelete = !this.verifyDelete;
  }

  verify(): void{
    this.productsvc.remove(this.product.id).subscribe({
      next: res => {
        console.debug("Product deleted successfully!");
        this.router.navigateByUrl("/products/list");
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
