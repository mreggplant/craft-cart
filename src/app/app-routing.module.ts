import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {StoreComponent} from './store/store.component';
import {CartComponent} from './cart/cart.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'store',
        component: StoreComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, HttpClientModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
