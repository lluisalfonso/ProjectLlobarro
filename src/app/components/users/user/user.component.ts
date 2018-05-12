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

  constructor(private userService: UserService,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
  }

  onSubmit(registerForm: NgForm) {
      if (registerForm.value.$key == null) {
          this.userService.insertUser(registerForm.value);
      } else {
          this.userService.updateUser(registerForm.value);
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
