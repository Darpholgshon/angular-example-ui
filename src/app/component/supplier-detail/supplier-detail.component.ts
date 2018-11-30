import {Component, Input, OnInit} from '@angular/core';

import {Supplier} from '../../model/supplier';
import {ActivatedRoute} from '@angular/router';
import {SupplierService} from '../../service/supplier.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor(private route: ActivatedRoute, private supplierService: SupplierService, private location: Location) {
  }

  ngOnInit() {
    this.getSupplier();
  }

  getSupplier() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplier(id)
      .subscribe(supplier => this.supplier = supplier);
  }

  goBack(): void {
    this.location.back();
  }
}
