import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { appSelectors } from 'src/app/my-app-store/app.selector';

@Component({
  selector: 'app-checkout-left',
  templateUrl: './checkout-left.component.html',
  styleUrls: ['./checkout-left.component.css']
})
export class CheckoutLeftComponent implements OnInit {

  
  emailId: any

  faStar = faStar;
  faStarHalf = faStarHalf;
  allCartItems!: any[];

  constructor(private store:Store) { 
    this.store.select(appSelectors.getCartDetails)
    .subscribe(cartItems => this.allCartItems = cartItems);

    this.store.select(appSelectors.getUser).subscribe(user => this.emailId = user.email);
  }

  ngOnInit(): void {
  }
}
