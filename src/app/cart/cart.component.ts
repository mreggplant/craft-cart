import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {CartItem} from '../store/store.component';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    cart: CartItem[] = [];

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cartService.getData().snapshotChanges().pipe(map(() => this.cart = this.cartService.items)).subscribe();
    }

    increaseItem(item: CartItem) {
        this.cartService.update(item);
    }

    decreaseItem(item: CartItem) {
        this.cartService.removeOne(item);
    }

    remove(item: CartItem) {
        this.cartService.remove(item);
    }

}
