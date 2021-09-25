import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'application';

  noHeaderPage:boolean = false;
  
  constructor(private router:Router, private store:Store){
    router.events.subscribe((event: any)=>{
      if(event instanceof NavigationEnd){
        if(event.url == '/login')
          this.noHeaderPage = true;
        else
          this.noHeaderPage = false;
      }
    });

  }
}
