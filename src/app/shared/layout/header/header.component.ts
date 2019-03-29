import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../cart/cart.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public authService: AuthService, private cartService: CartService) {
    }

    ngOnInit() {
        this.authService.onUserInfoChange.subscribe(() => {
            if (this.authService.userInfo) {
                this.cartService.getData();
            }
        });
    }
}
