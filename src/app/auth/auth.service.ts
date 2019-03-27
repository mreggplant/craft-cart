import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Injectable()
export class AuthService {
    public uid = this.angularFireAuth.authState.pipe(map(authState => (!authState ? null : authState.uid)));
    public isAdmin = true;

    constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
    }

    login(form: FormGroup) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(form.controls.username.value, form.controls.password.value).then(v => {
            this.router.navigate(['store']);
            console.log(v);
        });
    }

    logout() {
        this.angularFireAuth.auth.signOut();
        this.router.navigate(['login']);
    }
}
