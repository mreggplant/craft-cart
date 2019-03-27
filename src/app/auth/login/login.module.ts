import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {CustomMaterialModule} from '../../core/custom.material.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomMaterialModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {
}
