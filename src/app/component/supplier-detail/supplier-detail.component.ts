import {Component, Input, OnInit} from '@angular/core';

import {Supplier} from '../../model/supplier';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor() { }

  ngOnInit() {
  }

}
