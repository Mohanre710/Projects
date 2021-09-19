import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { auth } from '../firebase';
import { updateUser } from '../my-app-store/app.action';
import { appSelectors } from '../my-app-store/app.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string='';
  password:string='';
  
  constructor(private router:Router,private store:Store) { 
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
