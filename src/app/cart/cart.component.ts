import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    cartItems = 0;
    cart: any[];

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cartService.getData().snapshotChanges().pipe(map(v => {
            this.cart = this.cartService.items;
            this.cartItems = this.cart.length;
        })).subscribe();
    }

    remove(item) {
        this.cartService.remove(item);
    }

}
