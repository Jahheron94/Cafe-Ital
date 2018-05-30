import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { JuicesComponent } from './juices/juices.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'checkout', component: CheckoutComponent },

  { path: 'juices', component: JuicesComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


