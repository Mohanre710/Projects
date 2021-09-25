import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'orders', component: OrdersComponent},
  { path: '**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
