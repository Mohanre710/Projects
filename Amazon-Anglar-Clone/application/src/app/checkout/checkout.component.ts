import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  subTotalLength!:number;
  subTotalPrice:number=0;
  allCartItems!:any[];

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
    
  }

}
