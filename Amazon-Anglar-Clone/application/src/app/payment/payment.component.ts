import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadStripe, StripeAuBankAccountElement, StripeCardElement, StripeElement, StripeElements } from '@stripe/stripe-js';
import axios from '../axios';
import { useEffect, useState } from 'react';
import { appSelectors } from '../my-app-store/app.selector';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { removeAll, removeItemAction } from '../my-app-store/app.action';
import { db } from '../firebase';

const stripe = loadStripe(
  "pk_test_51Jbr0qSC2Ju0ZIVO5H4m0rQ2p20P8SZEhZvNfzosWfCAR5f7lrfM1zYEN4qahfVUQgpukWm0auAUpTTYVJKaATnc002rLwTXf9"
  );

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user;
  allCartItems!: any[];
  subTotalPrice:number=0;

  elements!: StripeElements
  card!: StripeCardElement;
  clientSecret: any;

  constructor(private store: Store, private router: Router, private http: HttpClient) {
    this.store.select(appSelectors.getCartDetails)
      .subscribe(cartItems => this.allCartItems = cartItems);
     
    this.store.select(appSelectors.getCartPrice)
    .subscribe(cartPrice => this.subTotalPrice = cartPrice);
    stripe.then(stripe=> {if(stripe!=null)
      this.elements = stripe.elements()
      let self =this
      this.card = this.elements.create('card',{hidePostalCode:true});
      this.card.mount('#card-element');
      this.card.on('change', function(event) {
        let displayError:any = document.getElementById('card-errors');
        if (event?.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      })
    });
   }

  ngOnInit(): void {
    const getClientSecret = async () =>{
      if(this.subTotalPrice>0){
        this.http.post<any>(`https://us-central1-angular-clone-12437.cloudfunctions.net/api/payments/create?total=${this.subTotalPrice * 100}`,{})
        .subscribe(response => {
          this.clientSecret = response.clientSecret
          console.log(this.clientSecret)
        });
      }
   }
   
   getClientSecret();
  }



  async handleSubmit(event: Event) {
    event.preventDefault();

    const payload = await stripe.then(stripe=> stripe?.confirmCardPayment(this.clientSecret, {
      payment_method: {
        card: this.card
      }
    })).then((paymentIntent)=>{
		if(this.user!="Guest"){
			db.collection('users')
				.doc(this.user.uid)
				.collection('orders')
				.doc(paymentIntent?.paymentIntent?.id)
				.set({
					cart: this.allCartItems,
					amount: paymentIntent?.paymentIntent?.amount,
					created: paymentIntent?.paymentIntent?.created
				})
			this.store.dispatch(removeAll());
			this.router.navigate(['orders'])
	}
      
    })
  }

}
