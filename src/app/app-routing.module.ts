import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {StoreComponent} from './store/store.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
    {path: 'cart', component: CartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'store', component: StoreComponent},
    {path: '', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
