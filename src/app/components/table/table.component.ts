import {Input, Component, OnInit } from '@angular/core';
import {buttondiv,button,column} from '../../configurablity/configure'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor() { }
  checks:Boolean=false;

  @Input() column?: column[];
  @Input() data: any[] = [];
  @Input() view: button = { iconClass: '', text: '', class: '' };
  @Input() delete: button = { iconClass: '', text: '', class: '' };
  @Input() edit: button = { iconClass: '', text: '', class: '' };
  @Input() buttons : buttondiv[] =[];

  ngOnInit(): void {
  }
  bulk(e:any){
    if(e.target.checked==true){
      this.checks=true
    }
    else{
      this.checks=false

    }
  }

}
