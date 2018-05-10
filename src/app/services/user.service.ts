import {Injectable} from '@angular/core';

// firebase
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userList: AngularFireList<any>;
    selectedUser: User = new User();

    constructor(private firebase: AngularFireDatabase) {
    }

    getUsers() {
        return this.userList = this.firebase.list('users');
    }

    insertUser(user: User) {
        this.userList.push({
            nom: user.nom,
            cognoms: user.cognoms,
            usuari: user.usuari,
            naixement: user.naixement,
            pais: user.pais,
            telefon: user.telefon,
            codiPostal: user.codiPostal
        });
    }

    updateUser(user: User) {
        this.userList.update(user.$key, {
            nom: user.nom,
            cognoms: user.cognoms,
            usuari: user.usuari,
            naixement: user.naixement,
            pais: user.pais,
            telefon: user.telefon,
            codiPostal: user.codiPostal
        });
    }

    deleteUser($key: string) {
        this.userList.remove($key);
    }
}
