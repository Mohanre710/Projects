import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { auth } from './firebase';
import { setUser, updateUser } from './my-app-store/app.action';
import { appSelectors } from './my-app-store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'application';

  noHeaderPage:boolean = false;
  signedIn:boolean = false;

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

  ngOnInit(): void {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
      if(authUser)
      {
          console.log(typeof authUser);
          this.store.dispatch(updateUser({user: authUser.uid}));
      }
    })
  }

  
  
}
