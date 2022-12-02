import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchingService } from 'src/app/services/searching.service';
import { column,button,buttondiv } from '../../configurablity/configure';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  keyword:any;
  
  constructor(public _search:SearchingService) {
    _search.searched$.subscribe((callback)=>{
      this.keyword = callback;
    })
  }

title = 'hrcrs-frontend';

  view: button = {
    text: '  ',
    iconClass: 'bi bi-eye text-info',
    class: 'btn btn-link btn-md',
  };

  edit: button = {
    text: '  ',
    iconClass: 'bi bi-pencil text-secondary',
    class: 'btn btn-link btn-md',
  };
  delete: button = {
    text: '  ',
    iconClass: 'bi bi-trash text-danger',
    class: 'btn btn-md',
  };
  pullcibil: button={
    text:'',
    iconClass:'bi bi-credit-card-fill text-primary',
    class:'btn btn-link btn-md'
  }

  buttons: buttondiv[] = [
    {
      buttonname: 'View',
      buttondesc: this.view,
    },
    {
      buttonname: 'Edit',
      buttondesc: this.edit,
    },
    {
      buttonname: 'Delete',
      buttondesc: this.delete,
    },
    {
      buttonname: 'Pull Cibil',
      buttondesc : this.pullcibil
    }
  ];

  columns: column[] = [
    {
      sort: true,
      search: true,
      columnName: 'ForeName',
      displayName: 'First Name',

    },
    {
      columnName: 'SurName',
      displayName: 'Last Name',
      type: '',
    },
    {
      displayName: 'Gender',
      columnName: 'Gender',
      type: 'gender',
    },
    {
      displayName: 'Email',
      columnName: 'Email',
      type: 'email',
    },
    {
      displayName: 'Phone Number',
      columnName: 'PhoneNumber',
      type: 'phone',
    },
    {
      displayName: 'DOB',
      columnName: 'DOB',
      type: 'date',
      format: 'DD-MM-YYYY',
    },
  ];

  data = [
    {
      ForeName: 'Akarsh',
      SurName: 'Saxena',
      DOB: '30-10-2000',
      Gender:'Male',
      Email:'akarsh.saxena@gmail.com',
      PhoneNumber:'8318044117'
    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    {
      ForeName: 'Aman',
      SurName: 'Singh',
      DOB: '18-11-2000',
      Gender:"Male",
      Email:'aman.singh@gmail.com',
      PhoneNumber:'9026483141'

    },
    
    
    {
      ForeName: 'Anshul',
      SurName: 'Kunwar',
      DOB: '03-01-2000',
      Gender:'Male',
      Email:'anshul.kunwar@gmail.com',
      PhoneNumber:'7275418687'
    },
    
  ];
}
