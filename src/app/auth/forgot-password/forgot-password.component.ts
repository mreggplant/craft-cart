import {Component} from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends LoginComponent {
}
