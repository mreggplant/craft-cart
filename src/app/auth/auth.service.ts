import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Injectable()
export class AuthService {
    public currentUser = null;

    // TODO: cleanup
    public uid = this.angularFireAuth.authState.pipe(map(authState => {
        this.currentUser = authState;
        return (!authState ? null : authState.uid);
    }));

    constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.authState.pipe(map(authState => {
            this.currentUser = authState;
            return (!authState ? null : authState.uid);
        }));
    }

    login(form: FormGroup) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(form.controls.email.value, form.controls.password.value)
            .then(() => this.router.navigate(['store']))
            .catch(error => alert('invalid credentials!'));
    }

    logout() {
        this.angularFireAuth.auth.signOut();
        this.router.navigate(['login']);
    }

    register(form: FormGroup) {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(form.controls.email.value, form.controls.password.value)
            .then(() => {
                alert('registration successful!');
                this.router.navigate(['login']);
            })
            .catch(error => console.log(error));
    }
}

export interface EmailPasswordCredentials {
    email: string;
    password: string;
}
