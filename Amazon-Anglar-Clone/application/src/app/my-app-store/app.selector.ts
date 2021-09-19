import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

const getAppState = createFeatureSelector<AppState>('app');
const getCartDetails = createSelector(getAppState, state => state.cart);
const getCartLength = createSelector(getAppState, state => state.cart?.length);
const getCartPrice = createSelector(getAppState, state => state.cart.reduce((amount,item)=>Number(item.price)+amount, 0));
const getUser = createSelector(getAppState, state=>state.user)

export const appSelectors = {
    getCartDetails,
    getCartLength,
    getCartPrice,
    getUser
};
