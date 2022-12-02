import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { SearchingService } from 'src/app/services/searching.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public _login: LoginService,public _search : SearchingService
  ) {}

  firstname: any;

  ngOnInit(): void {}
  sidebarToggle() {
    this.document.body.classList.toggle('toggle-sidebar');
  }
  logOut() {
    this._login.logOut();
  }

  Search() {
    this._search.search(this.firstname);

  }
}
