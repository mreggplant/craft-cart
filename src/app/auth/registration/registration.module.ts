import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../../core/custom.material.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [RegistrationComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomMaterialModule, RouterModule],
})
export class RegistrationModule {
}
