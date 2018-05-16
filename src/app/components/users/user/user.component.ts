import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

// Service
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

// User Class
import {User} from '../../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public email: string;
    public password: string;
    public id: string;
    public nom: string;
    public cognoms: string;
    public usuari: string;
    public naixement: string;
    public pais: string;
    public telefon: number;
    public codiPostal: number;

  constructor(private userService: UserService,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
  }

  onSubmit(registerForm: NgForm) {
      if (registerForm.value.$key == null) {
          this.userService.insertUser(this.id, this.nom, this.cognoms, this.usuari,
              this.naixement, this.pais, this.telefon, this.codiPostal);
      }
      this.resetForm(registerForm);
      this.toastr.success('T\'has registrat correctament', 'Registre Correcte');
  }

    resetForm(productForm?: NgForm) {
        if (productForm != null) {
            productForm.reset();
            this.userService.selectedUser = new User();

        }
    }

}
