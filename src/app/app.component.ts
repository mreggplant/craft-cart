import {Component, OnInit} from '@angular/core';

import {AuthService} from './auth/auth.service';
import {CartService} from './cart/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(public authService: AuthService, private cartService: CartService) {
    }

    ngOnInit() {
        this.authService.uid.subscribe(v => {
            if (v) {
                this.cartService.getData();
            }
        });
    }
}
