import { NumberSymbol } from '@angular/common';
import { Input, Component, OnInit } from '@angular/core';
import { ApiOperationsService } from 'src/app/services/api-operations.service';
import { BulkdeleteService } from 'src/app/services/bulkdelete.service';
import { SearchingService } from 'src/app/services/searching.service';
import { buttondiv, button, column } from '../../configurablity/configure';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(
    public ops: ApiOperationsService,
    public _delete: BulkdeleteService
  ) {
    _delete.pressed$.subscribe((callback) => {
      this.BulkDelete();
    });
  }
  checks: Boolean = false;
  reverse: boolean = true;
  orderHeader: string = '';
  p: number = 1;
  recordsPerPage: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  listt: any = [];

  @Input() searchfilter?: any;
  @Input() column?: column[];
  @Input() data: any[] = [];
  @Input() view: button = { iconClass: '', text: '', class: '' };
  @Input() delete: button = { iconClass: '', text: '', class: '' };
  @Input() edit: button = { iconClass: '', text: '', class: '' };
  @Input() buttons: buttondiv[] = [];
  sortvariable: string = 'Sort By';

  ngOnInit(): void {}
  bulk(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }
  sort(headerName: string) {
    this.reverse = !this.reverse;
    this.orderHeader = headerName;
  }
  onTableSizeChange(event: any): void {
    this.recordsPerPage = event.target.value;
  }
  checkbox(d: any) {
    if (!this.listt.includes(d.ForeName)) this.listt.push(d.ForeName);
  }
  handleButtonClick(d: any, h: any) {
    console.log(d.buttonname);
    if (d.buttonname === 'View') {
      this.ops.View(h.id);
      //navigate view page
    }
    if (d.buttonname === 'Delete') {
      this.ops.Delete(h.id);
    }
    if (d.buttonname === 'Edit') {
      //navigate edits page
    }
    if (d.buttonname === 'Pull Cibil') {
      this.ops.PullCibil(h.id);
    }
  }
  BulkDelete() {
    this.ops.BulkDelete(this.listt);
  }
}
