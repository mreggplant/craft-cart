import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {CartService} from '../cart/cart.service';
import {MatDialog} from '@angular/material';
import {ProductComponent} from './product/product.component';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

    products: CartItem[];

    constructor(private db: AngularFireDatabase, private cart: CartService, private dialog: MatDialog) {

    }

    ngOnInit() {
        this.db.list('/products')
            .valueChanges()
            .subscribe(products => {
                this.products = products;
            });
    }

    addToCart(item: CartItem): void {
        this.cart.add(item);
    }

    showDetails(item: CartItem): void {
        const dialogRef = this.dialog.open(ProductComponent, {
            data: item
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    inCart(item: CartItem): boolean {
        return !isNullOrUndefined(this.cart.find(item));
    }

}

export interface CartItem {
    key?: string;
    id?: string;
    productId?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    price?: number;
    user?: string;
    quantity?: number;
}
