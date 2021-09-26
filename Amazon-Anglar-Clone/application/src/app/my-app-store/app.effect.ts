import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: 'root'
})
export class AppEffects {

    constructor(private action$:Actions, private store:Store){
    }
}
