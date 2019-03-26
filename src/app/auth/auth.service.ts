import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    public uid = this.angularFireAuth.authState.pipe(map(authState => (!authState ? null : authState.uid)));
    public isAdmin = true;
    constructor(private angularFireAuth: AngularFireAuth) {}

    login() {
        this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    logout() {
        this.angularFireAuth.auth.signOut();
    }
}
