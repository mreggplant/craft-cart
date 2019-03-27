import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {LoginModule} from './login/login.module';
import {RegistrationModule} from './registration/registration.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, AngularFireAuthModule, LoginModule],
    exports: [LoginModule, RegistrationModule, ForgotPasswordModule]
})
export class AuthModule {
}
