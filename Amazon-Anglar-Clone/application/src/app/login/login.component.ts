import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { Store } from '@ngrx/store';
import { auth } from '../firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string='';
  password:string='';

  constructor(private router:Router,private location: Location,private store:Store) { 
  }

  signIn(event:Event) {
    auth.signInWithEmailAndPassword(this.email,this.password)
    .then(auth=>{
      if(auth){
			this.router.navigate(['home']);
        }
    }).catch(error=>alert(error.message));
    
  }

  signUp(event:Event) {
    event.preventDefault();
    
    auth.createUserWithEmailAndPassword(this.email,this.password)
    .then(auth=>{
      if(auth){
        this.router.navigate(['home']);
      }
    }).catch(error=>alert(error.message));

  }

}
