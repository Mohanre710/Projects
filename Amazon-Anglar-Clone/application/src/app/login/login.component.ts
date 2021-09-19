import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { auth } from '../firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string='';
  password:string='';

  userData!: Observable<firebase.User>;

  constructor(private router:Router) { 
  }

  signIn(event:Event) {
    auth.signInWithEmailAndPassword(this.email,this.password)
    .then(auth=>{
      if(auth){
        this.router.navigate(['home']);
      }
    }).catch(error=>alert(error.message));
    
  }

  signOut() {
    this.email='';
    this.password='';
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
