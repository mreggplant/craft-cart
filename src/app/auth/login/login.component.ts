import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    form: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    submit() {
        if (this.form.valid) {
            this.submitEM.emit(this.form.value);
        }
    }

    @Input()
    error: string | null;

    @Output()
    submitEM = new EventEmitter();

    constructor(public authService: AuthService) {
    }


}
