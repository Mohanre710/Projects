import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeItemAction } from 'src/app/my-app-store/app.action';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {
  @Input()
  allCartItems!: any[];

  @Input()
  hideButton:boolean = false;

  constructor(private store:Store) { }
  ngOnInit(): void {
  }

  removeFromBasket(removeId: number) {
    this.store.dispatch(removeItemAction({id: removeId}));
  }

}
