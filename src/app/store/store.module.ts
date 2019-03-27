import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {CustomMaterialModule} from '../core/custom.material.module';

@NgModule({
    declarations: [StoreComponent],
    imports: [
        CommonModule,
        AngularFireDatabaseModule,
        CustomMaterialModule
    ],
    exports: [StoreComponent]
})
export class StoreModule {
}
