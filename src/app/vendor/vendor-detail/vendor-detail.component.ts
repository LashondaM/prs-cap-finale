import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;

  constructor(private route: ActivatedRoute, private vendorsvc: VendorService) { }

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
