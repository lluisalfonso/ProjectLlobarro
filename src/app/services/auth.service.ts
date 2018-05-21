import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    authState: any = null;

  constructor(
      public afAuth: AngularFireAuth,
      public toastr: ToastrService

  ) {
      this.afAuth.authState.subscribe((auth) => {
          this.authState = auth;
      });
      
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, pass)
          .then(
          userData => resolve(userData),
          err => reject (err));
    });
  }

  loginEmail(email: string, pass: string) {
      return new Promise((resolve, reject) => {
          this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(
              userData => resolve(userData),
              err => reject (err)
          );
      });
  }

  getAuth() {
    return this.afAuth.authState.map ( auth => auth );
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

    get authenticated(): boolean {
        return this.authState !== null;
    }

  currentUserId(): string {
      return this.authenticated ? this.authState.uid : '';
  }

  verifyemail(){
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        console.log("Email enviat");
       }, function(error) {
        console.error(error);
       });    
  }
  resetpassword(email){
    firebase.auth().sendPasswordResetEmail(email).then(function() {
    }).catch(function(error) {
        console.log(error);
      });
   
      
  }
}
