import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor;

  constructor(private vendorsvc: VendorService, private router: Router, private route: ActivatedRoute) { }

  save(): void{
    console.log("saved", this.vendor);
    this.vendorsvc.change(this.vendor).subscribe({
      next: res => {
        console.log("Vendor changed successfully!");
        this.router.navigateByUrl("/vendors/list");
      },
      error: err => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vendorsvc.getByPk(id).subscribe({
      next: res => {
        this.vendor = res;
        console.log(res);
      }
    });
  }

}
