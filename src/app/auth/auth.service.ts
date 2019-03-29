import {EventEmitter, Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Injectable()
export class AuthService {

    public userInfo = null;
    public passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    public onUserInfoChange = new EventEmitter<void>();

    constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
    }

    login(form: FormGroup) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(form.controls.email.value, form.controls.password.value)
            .then(() => {
                this.angularFireAuth.authState.pipe(map(authState => {
                    this.userInfo = authState;
                    return (!authState ? null : authState.uid);
                })).subscribe(() => {
                    this.onUserInfoChange.emit();
                    this.router.navigate(['store']);
                });
            })
            .catch(error => alert('invalid credentials!'));
    }

    logout() {
        this.angularFireAuth.auth.signOut();
        this.userInfo = null;
        this.onUserInfoChange.emit();
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

    resetPassword(form: FormGroup) {
        this.angularFireAuth.auth.sendPasswordResetEmail(form.controls.email.value)
            .then(() => alert('reset password instructions sent registered email'))
            .catch(err => alert(err));
    }
}
