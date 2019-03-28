import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {CartService} from '../cart/cart.service';
import {MatDialog} from '@angular/material';
import {ProductComponent} from './product/product.component';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

    products: any[];

    constructor(private db: AngularFireDatabase, private cart: CartService, private dialog: MatDialog) {

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

    showDetails(p): void {
        const dialogRef = this.dialog.open(ProductComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
