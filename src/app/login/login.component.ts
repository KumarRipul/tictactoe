import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='admin'
  password:string='password@123!@#'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }
  // jwtAuthLogin() {
  //   this.authService.jwtAuthenticationService(this.username, this.password)
  //       .subscribe(
  //         data => {
  //           console.log(data)
  //           this.router.navigate(['newgame'])
  //          this.invalidLogin = false
  //         },
  //         error => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  // }

}
