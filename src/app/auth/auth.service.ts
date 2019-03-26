import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    public uid = this.angularFireAuth.authState.pipe(map(authState => (!authState ? null : authState.uid)));
    public isAdmin = true;

    constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
    }

    login(email, pwd) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, pwd).then(v => {
            this.router.navigate(['store']);
        }).catch(alert('incorrect credentials'));
    }

    logout() {
        this.angularFireAuth.auth.signOut();
        this.router.navigate(['login']);
    }
}
