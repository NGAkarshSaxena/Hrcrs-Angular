import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiOperationsService {
  constructor() {}

  Delete(id: any) {}
  Edit(id: any) {}
  View(id: any) {}
  PullCibil(id: any) {}
  AddNew(customclassfordata: any) {}
  BulkDelete(ListofIds:number[]){}
  Read():any{}
  ReadById(){}
}
