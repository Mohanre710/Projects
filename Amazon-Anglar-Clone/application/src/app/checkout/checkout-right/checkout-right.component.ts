import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appSelectors } from 'src/app/my-app-store/app.selector';

@Component({
  selector: 'app-checkout-right',
  templateUrl: './checkout-right.component.html',
  styleUrls: ['./checkout-right.component.css']
})
export class CheckoutRightComponent implements OnInit {

  subTotalLength!:number;
  subTotalPrice:number=0;

  constructor(private store: Store) { 
    this.store.select(appSelectors.getCartLength)
      .subscribe(length => this.subTotalLength = length);

    this.store.select(appSelectors.getCartPrice)
      .subscribe(cartPrice => this.subTotalPrice = cartPrice);
  }

  ngOnInit(): void {
  }

}
