import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { APP_REDUCER } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('app',APP_REDUCER),
    EffectsModule.forFeature([AppEffects])
  ]
})
export class MyAppStoreModule { }
