import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulkdeleteService {

  constructor() { }
  private catch = new Subject<any>();
  pressed$  = this.catch.asObservable();

  BulkDelete(){
    this.catch.next(null);
  }
}