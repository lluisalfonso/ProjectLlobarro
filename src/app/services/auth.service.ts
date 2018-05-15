import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    authState: any = null;

  constructor(
      public afAuth: AngularFireAuth
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

    get authenticated(): boolean {
        return this.authState !== null;
    }

  currentUserId(): string {
      return this.authenticated ? this.authState.uid : '';
  }
}
