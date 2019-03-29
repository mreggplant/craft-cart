import {Component} from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends LoginComponent {

    submit() {
        if (this.form.valid) {
            if (this.form.controls['password'].value === this.form.controls['confirmPassword'].value) {
                if (this.form.controls['password'].value.match(this.authService.passwordPattern)) {
                    this.authService.register(this.form.value);
                    this.error = null;
                } else {
                    /* tslint:disable:max-line-length */
                    this.error = 'Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters.';
                }
            } else {
                this.error = 'Passwords does not match!';
            }
        }
    }
}
