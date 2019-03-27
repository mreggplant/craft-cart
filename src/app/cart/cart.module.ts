import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {CustomMaterialModule} from '../core/custom.material.module';

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    exports: [CartComponent]
})
export class CartModule {
}
