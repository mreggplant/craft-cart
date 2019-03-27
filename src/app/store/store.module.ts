import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
    declarations: [StoreComponent],
    imports: [
        CommonModule,
        AngularFireDatabaseModule
    ],
    exports: [StoreComponent]
})
export class StoreModule {
}
