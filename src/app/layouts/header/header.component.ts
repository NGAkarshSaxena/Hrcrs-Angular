import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,public _login: LoginService) { }

  ngOnInit(): void {
  }
  sidebarToggle()
  {
    this.document.body.classList.toggle('toggle-sidebar');
  }
  logOut(){
    this._login.logOut();
  }
}
