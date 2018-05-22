import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase'


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class Reset implements OnInit {

  public email: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  resetPassword(){
    this.authService.resetpassword(this.email);
    this.toastr.success('Missatge Enviat',"S'ha enviat el missatge");
    this.router.navigate(['/login']);
    
  }




}
