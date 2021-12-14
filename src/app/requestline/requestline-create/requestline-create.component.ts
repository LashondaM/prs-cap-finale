import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline/requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  // requestline!: Requestline;
  products!: Product[];

  constructor(private reql: RequestlineService, private productsvc: ProductService, private route: ActivatedRoute, private router: Router) { }

  save(): void{
    this.requestline.productId = +this.requestline.productId;
    console.log("B4", this.requestline);
    this.reql.create(this.requestline).subscribe({
      next: res => {
        console.log("Requestline changed successfully!");
        this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.productsvc.list().subscribe({
      next: res => {
        console.debug("Products:", res);
        this.products = res as Product[];
      }
    });
    this.requestline.requestId = +this.route.snapshot.params["id"];
  }

}
