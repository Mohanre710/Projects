import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { db } from '../firebase';
import { appSelectors } from '../my-app-store/app.selector';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user;
  orders: any;
  hideButton:boolean = true;

  constructor(private store: Store) { 
    this.store.select(appSelectors.getUser).subscribe(
      user => {
        this.user = user
        if(this.user && this.user!="Guest"){
          db.collection('users')
          .doc(this.user.uid)
          .collection('orders')
          .orderBy('created')
          .onSnapshot(snapshot =>{
            this.orders = snapshot.docs.map(doc=>({
              id: doc.id,
              data: doc.data()
            }))
            console.log(this.orders)
            this.orders.forEach(element => {
              console.log(element.data)
            });
          })
        }
        else{
          this.orders = []
        }
      } 
    )
  }

  ngOnInit(): void {}

  createDate(date:any){
    return new Date(date*1000);
  }

}
