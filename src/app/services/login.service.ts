import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  credential: Credential = {
    username: '',
    password: '',
  };
  constructor(private http:HttpClient ,private router: Router, private route: ActivatedRoute) {}
   
  Authenticate() {
    
    console.log(this.credential);
    // this.http.post('',this.credential).subscribe((response)=>{
    //   console.log(response)

       // localStorage.setItem('token',response);
       
      
    // })
    if(this.credential.username=='ng2339'){
      // setTimeout(function(){
      //   // localStorage.removeItem('token');
      //   alert("About to logout");

      // },60000);
      

    localStorage.setItem('token','abcdefghijklmnopqrstuvwxyz');
    this.router.navigate(['dashboard']);
    return true;
    
    }
    else{
      return false;
    }
    
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
  }

}

interface Credential {
  username: string;
  password: string;
}
interface Token{
  tokenString:string,
  tokenvalidity:string
}


