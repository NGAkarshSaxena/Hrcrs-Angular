import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {

  constructor() { }
  private catch = new Subject<any>();

  searched$  = this.catch.asObservable();

  search(keyword:any){
    this.catch.next(keyword)
  }
}
