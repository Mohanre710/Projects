import { Component, DoCheck, Input, IterableChanges, IterableDiffer, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { appSelectors } from '../my-app-store/app.selector';
import { auth } from '../firebase';
import { NoOp, updateUser } from '../my-app-store/app.action';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  cartLength = 0;

  signedIn: any=false;
  User: any;

  constructor(private store: Store,private route:Router) {
    this.store.select(appSelectors.getCartLength).subscribe(length=>this.cartLength = length);

    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
      if(authUser){
        this.signedIn = true
        this.store.dispatch(updateUser({user: authUser.uid}))
        this.User = authUser
      }
      else{
        this.signedIn = false
        this.store.dispatch(updateUser({user: "Guest"}))
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


  signOut() {
    auth.signOut();
    this.User=null
  }

  checkSignedIn(){
    return this.signedIn; 
  }

  ngOnInit(): void {
    
  }
  
}
