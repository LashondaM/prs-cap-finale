import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;

  verifyDelete: boolean = false;

  constructor(private route: ActivatedRoute, private vendorsvc: VendorService, private router: Router) { }

  delete(): void{
    this.verifyDelete = !this.verifyDelete;
  }

  verify(): void{
    this.vendorsvc.remove(this.vendor.id).subscribe({
      next: res => {
        console.debug("User deleted successfully!");
        this.router.navigateByUrl("/vendors/list");
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
