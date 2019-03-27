import {forwardRef, Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, @Inject(forwardRef(() => AuthService)) private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.uid) {
            // logged in so return true
            return true;
        } else {
            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
    }
}
