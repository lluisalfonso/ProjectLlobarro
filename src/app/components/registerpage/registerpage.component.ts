import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  public email: string;
  public password: string;
  public id: string;
  public nom: string;
  public cognoms: string;
  public usuari: string;
  public naixement: string;
  public pais?: string;
  public telefon?: number;
  public codiPostal?: number;

  constructor(
      public authService: AuthService,
      private userService: UserService,
      public router: Router,
      public toastr: ToastrService
  ) { }

  ngOnInit() {
      this.userService.getUsers();
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
        this.id = this.authService.currentUserId();
        this.userService.insertUser(this.id, this.nom, this.cognoms, this.usuari, this.naixement, this.pais, this.telefon, this.codiPostal);
        this.toastr.success('Operació realitzada correctament', 'Registre Usuari');
        this.authService.loginEmail(this.email, this.password)
            .then( (res2) => {
                this.router.navigate(['/private']);
            }).catch((err) => {
            console.log(err);
            this.toastr.error('Valors incorrectes!', 'Login Incorrecte!');
            this.router.navigate(['/login']);
        });
      console.log(res);
      }).catch((err) => {
        this.toastr.error('Operació no realitzada', 'Registre Usuari');
        console.log(err);
      });
  }
}
