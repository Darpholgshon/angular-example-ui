import {Component, OnInit} from '@angular/core';

import {Supplier} from '../../model/supplier';
import {SupplierService} from '../../service/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private supplierService: SupplierService) {
  }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getSuppliers()
      .subscribe(suppliers => this.suppliers = suppliers);
  }
}
