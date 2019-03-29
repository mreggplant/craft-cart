import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForgotPasswordComponent} from './forgot-password.component';
import {CustomMaterialModule} from '../../core/custom.material.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, CustomMaterialModule, RouterModule
    ]
})
export class ForgotPasswordModule {
}
