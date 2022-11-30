import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, public login: LoginService) {}

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


  title = 'hrcrs-frontend';
  onSubmit() {
    if (!this.login.Authenticate()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Username or Password is incorrect ',
      });
    } else {
        setTimeout(  function () {
        // localStorage.removeItem('token');
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            text: 'You will be logged out in approximately 5 minutes.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Refresh Session',
            cancelButtonText: 'Cancel!',
            reverseButtons: true,
          })
          .then((result: any) => {
            if (result.isConfirmed) {
              // refresh staylogged in
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              setTimeout(function () {
                localStorage.clear();
                
              }, 60000);
              
            }
          });
      }, 60000);
    }
  }
}
