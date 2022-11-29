import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  constructor() { }
  @Input() text:string="";
  @Input() class: string=""
  @Input() iconclass:string=""

  // @Output() notify = new EventEmitter<Object>();
  
  ngOnInit(): void {
  }

  // func(){
  //   this.notify.emit();
  // }
}