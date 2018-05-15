import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public username: string;
  public email: string;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(autho => {
      if (autho) {
        this.isLogin = true;
        this.email = autho.email;
        this.username = autho.displayName;
      } else {
        this.isLogin = false;
      }
    });
  }
  onClickLogout() {
    this.authService.logout();
  }
}
