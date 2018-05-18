import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject } from 'angularfire2/database';

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
        this.authService.verifyemail()
        this.toastr.success("S'ha enviat un correu de verificacio", 'Registre Usuari');
        console.log(res);
        }).catch((err) => {
            this.toastr.error('Operació no realitzada', 'Registre Usuari');
            console.log(err);
      });
  }
  
}
