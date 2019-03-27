import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class CartService {

    private cart: AngularFireList<any>;

    public items = [];

    constructor(private db: AngularFireDatabase, private authService: AuthService) {
    }

    add(item) {
        item.user = this.authService.currentUser.uid;
        this.cart.push(item);
    }

    remove(item) {
        this.cart.remove(item.key);
    }

    getData() {
        this.cart = this.db.list('/cart');
        this.cart.snapshotChanges().subscribe(changes => {
            this.items = [];
            return changes.map(c => {
                this.items.push(({key: c.payload.key, ...c.payload.val()}));
            });
        });
        return this.cart;
    }
}
