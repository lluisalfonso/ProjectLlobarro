import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/private']);
    }).catch((err) => {
      console.log(err);
      this.toastr.error('Valors incorrectes!', 'Login Incorrecte!');
      this.router.navigate(['/login']);
    });
  }
  ngOnclickGoogle() {
    this.authService.loginGoogle()
    .then((res) => {
      this.router.navigate(['/private']);
    }).catch((err) => {
      this.toastr.error('Login Incorrecte', 'Login Incorrecte!');
      this.router.navigate(['/login']);
    })

  }

  ngOnclickReset(){
    this.router.navigate(['/reset']);
  }

}
