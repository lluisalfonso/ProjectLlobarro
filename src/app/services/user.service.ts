import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    userList: AngularFireList<any>;
    selectedUser: User = new User();
    constructor(
        private firebase: AngularFireDatabase,
        public authService: AuthService) { }
    getUsers() {
        return this.userList = this.firebase.list('users');
    }
    insertUser(id: string, nom: string, cognoms: string, usuari: string, naixement: string, pais?: string,
               telefon?: number, codiPostal?: number) {
        if ((typeof pais === 'undefined') && (typeof telefon === 'undefined') && (typeof codiPostal === 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: '',
                telefon: '',
                codiPostal: ''
            });
        } else if ((typeof pais === 'undefined') && (typeof telefon !== 'undefined') && (typeof codiPostal !== 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: '',
                telefon: telefon,
                codiPostal: codiPostal
            });
        } else if ((typeof pais === 'undefined') && (typeof telefon === 'undefined') && (typeof codiPostal !== 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: '',
                telefon: '',
                codiPostal: codiPostal
            });
        } else if ((typeof pais === 'undefined') && (typeof telefon !== 'undefined') && (typeof codiPostal === 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: '',
                telefon: telefon,
                codiPostal: ''
            });
        } else if ((typeof pais !== 'undefined') && (typeof telefon === 'undefined') && (typeof codiPostal !== 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: pais,
                telefon: '',
                codiPostal: codiPostal
            });
        } else if ((typeof pais !== 'undefined') && (typeof telefon === 'undefined') && (typeof codiPostal === 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: pais,
                telefon: '',
                codiPostal: ''
            });
        } else if ((typeof pais !== 'undefined') && (typeof telefon !== 'undefined') && (typeof codiPostal === 'undefined')) {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: pais,
                telefon: telefon,
                codiPostal: ''
            });
        } else {
            this.userList.push({
                id: id,
                nom: nom,
                cognoms: cognoms,
                usuari: usuari,
                naixement: naixement,
                pais: pais,
                telefon: telefon,
                codiPostal: codiPostal
            });
        }
    }

    updateUser(id?: string, nom?: string, cognoms?: string, usuari?: string, naixement?: string, pais?: string,
               telefon?: number, codiPostal?: number) {
        this.userList.push({
            id: id,
            nom: nom,
            cognoms: cognoms,
            usuari: usuari,
            naixement: naixement,
            pais: pais,
            telefon: telefon,
            codiPostal: codiPostal
        });
    }

    deleteUser(id: string) {
        this.userList.remove(id);
    }
}
