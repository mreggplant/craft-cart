import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {CustomMaterialModule} from '../core/custom.material.module';
import { ProductComponent } from './product/product.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [StoreComponent, ProductComponent],
    imports: [
        CommonModule,
        AngularFireDatabaseModule,
        CustomMaterialModule,
        RouterModule
    ],
    exports: [StoreComponent],
    entryComponents: [ProductComponent]
})
export class StoreModule {
}
