import { Component, Input, OnInit } from '@angular/core';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { appSelectors } from '../my-app-store/app.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  cartLength = 0;

 @Input()
  signedIn: boolean=false;

    constructor(private store: Store) {
    this.store.select(appSelectors.getCartLength).subscribe(length=>this.cartLength = length);
   }

  ngOnInit(): void {
    
  }
  
}
