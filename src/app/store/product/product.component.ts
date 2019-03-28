import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: any;

    constructor(dialogRef: MatDialogRef<ProductComponent>,
                @Inject(MAT_DIALOG_DATA) product: any) {
        this.product = product;
    }

    ngOnInit() {
    }

}
