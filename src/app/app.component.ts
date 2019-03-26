import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AuthService],
})
export class AppComponent {
    title = 'craft-cart';

    private products: any[];

    constructor(private db: AngularFireDatabase, public authService: AuthService) {
        db.list('/products')
            .valueChanges()
            .subscribe(products => {
                this.products = products;
                console.log(this.products);
            });
    }
}
