import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { Store } from '@ngrx/store';
import { myAuth } from '../firebase';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string='';
  password:string='';

  faGithub = faGithub;

  constructor(private router:Router,private location: Location,private store:Store) { 
  }

  signIn(event:Event) {
    myAuth.signInWithEmailAndPassword(this.email,this.password)
    .then(auth=>{
      if(auth){
			this.router.navigate(['home']);
        }
    }).catch(error=>alert(error.message));
    
  }

  signUp(event:Event) {
    event.preventDefault();
    
    myAuth.createUserWithEmailAndPassword(this.email,this.password)
    .then(auth=>{
      if(auth){
        this.router.navigate(['home']);
      }
    }).catch(error=>alert(error.message));

  }

}
