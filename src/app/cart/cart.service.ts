import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from '../auth/auth.service';
import {CartItem} from '../store/store.component';
import {isNullOrUndefined} from 'util';

@Injectable()
export class CartService {

    private cart: AngularFireList<any>;

    public items: CartItem[] = [];

    public cartCount = 0;

    constructor(private db: AngularFireDatabase, private authService: AuthService) {
    }

    add(item: CartItem) {
        item.user = this.authService.userInfo.uid;
        item.id = generateUUID();
        item.quantity = 1;
        const itemUpdate = this.items.find(o => o.productId === item.productId);
        isNullOrUndefined(itemUpdate) ? this.cart.push(item) : this.update(itemUpdate);
    }

    removeOne(item: CartItem) {
        item.quantity--;
        this.db.object(`/cart/${item.key}`).update(item);
    }

    remove(item) {
        this.cart.remove(item.key);
    }

    update(item: CartItem) {
        item.quantity = (item.quantity || 1) + 1;
        this.db.object(`/cart/${item.key}`).update(item);
    }

    find(item): CartItem {
        return this.items.find(o => o.productId === item.productId);
    }

    getData() {
        this.cart = this.db.list('/cart', ref => ref.orderByChild('user').equalTo(this.authService.userInfo.uid));
        this.cart.snapshotChanges().subscribe(changes => {
            this.items = [];
            return changes.map(c => {
                this.items.push(({key: c.payload.key, ...c.payload.val()}));
                this.cartCount = this.items.reduce((a: number, b: CartItem) => a + b.quantity, 0);
            });
        });
        return this.cart;
    }


}

function generateUUID() {
    let d: number = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r: number = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
