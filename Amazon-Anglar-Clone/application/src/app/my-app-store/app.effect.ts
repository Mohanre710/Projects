import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { auth } from "../firebase.js";
import { setUser, updateUser } from "./app.action";
import { map, mergeMap, take } from "rxjs/operators"
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppEffects {

    constructor(private action$:Actions, private store:Store){
    }
}
