import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { appSelectors } from 'src/app/my-app-store/app.selector';
import { removeItemAction } from 'src/app/my-app-store/app.action';

@Component({
  selector: 'app-checkout-left',
  templateUrl: './checkout-left.component.html',
  styleUrls: ['./checkout-left.component.css']
})
export class CheckoutLeftComponent implements OnInit {

  allCartItems!: any[];

  faStar = faStar;
  faStarHalf = faStarHalf;

  constructor(private store:Store) { 
    this.store.select(appSelectors.getCartDetails)
      .subscribe(cartItems => this.allCartItems = cartItems);
  }

  ngOnInit(): void {
  }

  removeFromBasket(removeId: number) {
    this.store.dispatch(removeItemAction({id: removeId}));
  }
}
