import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: './+login/login.module#LoginModule'
    }
];

export const routing = RouterModule.forChild(routes);
