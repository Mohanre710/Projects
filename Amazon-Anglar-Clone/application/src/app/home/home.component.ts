import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { filter, take } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  faStar = faStar;
  faStarHalf = faStarHalf;
	
 
  myProducts!: any;

  constructor(private http: HttpClient) {
	 http.get("https://us-central1-angular-clone-12437.cloudfunctions.net/api/products")
	 .pipe(filter(a => {return a!=null && a!=undefined}))
	 .pipe(take(1))
	 .subscribe(
		response => this.myProducts = response
	 )
   }

   getProducts(n){
	   if(this.myProducts!=undefined){
			return this.myProducts.sort(()=>0.5 - Math.random()).slice(0,n); 
	   }
   }

}
