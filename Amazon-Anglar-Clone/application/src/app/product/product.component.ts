import { Component, Input, OnInit } from '@angular/core';
import { faStar,faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { addItemAction } from '../my-app-store/app.action';
import { appSelectors } from '../my-app-store/app.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id!: string;
  @Input() title!: string;
  @Input() rating!: string;
  @Input() image!: string;
  @Input() price!: string;

  ratingFull:number[] = [];
  ratingHalf:boolean = false;

  faStar = faStar;
  faStarHalf = faStarHalf;

  constructor(private store:Store) { }

  ngOnInit(): void {
    let numberedRating = Number(this.rating);
    let flooredRating =Math.floor(numberedRating);
    for(let i=0;i<flooredRating;i++){
      this.ratingFull.push(i);
    }
    this.ratingHalf = (numberedRating - flooredRating!=0);
  }

  addToBasket() {
    this.store.dispatch(addItemAction({
      addItem: {
        id: this.id,
        title: this.title,
        image: this.image,
        price: this.price,
        rating: this.rating
      }
    }))
  }

}
