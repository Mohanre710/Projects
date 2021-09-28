import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Amazon Angular Clone';

  faGithub = faGithub
  noHeaderPage:boolean = false;
  
  constructor(private router:Router){
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
