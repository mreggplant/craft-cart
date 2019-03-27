import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

    products: any[];

    constructor(private db: AngularFireDatabase, private cart: CartService) {

    }

    ngOnInit() {
        this.db.list('/products')
            .valueChanges()
            .subscribe(products => {
                this.products = products;
            });
    }

    addToCart(p): void {
        this.cart.add(p);
    }

}
