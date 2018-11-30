import { Component, OnInit } from '@angular/core';

import Supplier from '../model/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  supplier : Supplier = {
    id: 1,
    name: 'RTE'
  };

  constructor() { }

  ngOnInit() {
  }
}
