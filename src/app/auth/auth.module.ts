import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {LoginModule} from './login/login.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, AngularFireAuthModule, LoginModule],
    exports: [LoginModule]
})
export class AuthModule {
}
