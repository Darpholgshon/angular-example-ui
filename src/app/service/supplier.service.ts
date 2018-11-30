import {Injectable} from '@angular/core';

import {Supplier} from '../model/supplier';
import {SUPPLIERS} from '../mocks/mock-suppliers';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private messageService: MessageService) { }

  getSuppliers(): Observable<Supplier[]> {
    // TODO: inject http service to get real suppliers.
    this.messageService.add('SupplierService: fetched all suppliers!');
    return of(SUPPLIERS);
  }

  getSupplier(id: number): Observable<Supplier> {
    // TODO: send the message _after_ fetching the supplier
    this.messageService.add(`SupplierService: fetched supplier id=${id}`);
    return of(SUPPLIERS.find(supplier => supplier.id === id));
  }
}
