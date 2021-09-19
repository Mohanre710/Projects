import {createAction, props} from '@ngrx/store';
import * as firebase from 'firebase';

export const addItemAction= createAction('[Cart Action] ADD_TO_BASKET', props<{addItem: any }>());
export const removeItemAction= createAction('[Cart Action] REMOVE_FROM_BASKET', props<{id:number}>());
export const setUser = createAction('[User Action] SET_USER');
export const updateUser = createAction('[User Action] UPDATE_USER',props<{user: any}>());
export const NoOp = createAction('[No Action] NO_OP');