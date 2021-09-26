import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { appSelectors } from '../my-app-store/app.selector';
import { myAuth } from '../firebase';
import { updateUser } from '../my-app-store/app.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  cartLength = 0;

  signedIn: any=false;
  User: any;

  constructor(private store: Store,private route:Router) {
    this.store.select(appSelectors.getCartLength).subscribe(length=>this.cartLength = length);

    myAuth.onAuthStateChanged(authUser=>{
      if(authUser){
        this.signedIn = true
        this.store.dispatch(updateUser({user: authUser.toJSON()}))
        this.User = authUser.email;
      }
      else{
        this.signedIn = false
        this.store.dispatch(updateUser({user: "Guest"}))
        this.User = "Guest"
      }
      
    })
  }

  signOut() {
    myAuth.signOut();
    this.User=null
  }

  checkSignedIn(){
    return this.signedIn; 
  }

  ngOnInit(): void {
    
  }
  
}
