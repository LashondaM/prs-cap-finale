import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline/requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline!: Requestline;
  products!: Product[];

  constructor(private reql: RequestlineService, private productsvc: ProductService, private route: ActivatedRoute, private router: Router) { }

  save(): void{
    console.log("B4", this.requestline);
    this.reql.change(this.requestline).subscribe({
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
    let id = this.route.snapshot.params["id"];
    this.reql.getByPk(id).subscribe({
      next: res => {
        console.debug("Requestline:", res);
        this.requestline = res as Requestline;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
