import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from 'src/environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from './core/custom.material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartModule} from './cart/cart.module';
import {StoreModule} from './store/store.module';
import {AuthService} from './auth/auth.service';
import {CartService} from './cart/cart.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        CartModule,
        StoreModule
    ],
    bootstrap: [AppComponent],
    providers: [AuthService, CartService]
})
export class AppModule {
}
