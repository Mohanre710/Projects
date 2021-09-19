import { InjectionToken } from "@angular/core";
import { Action, createReducer, on } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { addItemAction, NoOp, removeItemAction, updateUser } from "./app.action";

export interface AppState {
    cart: any[],
    user?: any,
    updatedUser: boolean,
    tempUpdateOnstart:any;
}

export const initialState:AppState = {
    cart: [],
    user: 'Guest',
    updatedUser: false,
    tempUpdateOnstart:"No"
}

const reducer = createReducer(
    initialState,
    on(addItemAction, (state, action) =>{
        console.log(action);
        return {
            ...state,
            cart: [...state.cart,action.addItem]
        }
    }),
    on(removeItemAction, (state, action)=>{
        const index = state.cart.findIndex(
            (cartItem) => cartItem.id === action.id
        );
        let newCart = [...state.cart];

        if(index>=0){
            newCart.splice(index,1);
        }
        else {
            console.warn(`Can not remove product (id: ${action.id}) as its not in cart!`)
        }
        return {
            ...state,
            cart: newCart
        }
    }),
    on(updateUser, (state,action)=>{
        if(action.user=="Guest"){
            return {
                ...state,
                user:action.user,
                updatedUser: false
            }
        }else{
            return {
                ...state,
                user: action.user,
                updatedUser: true
            }
        }
    })
  );
   
  export function appReducer(state: any, action: Action) {
    return reducer(state, action);
  }

  export const APP_REDUCER = new InjectionToken<any>('App Reducer', {
      factory: ()=> appReducer
  });