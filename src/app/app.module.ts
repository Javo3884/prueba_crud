import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { ShopingCartItemComponent } from './shoping-cart-item/shoping-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoopingCartComponent,
    ShopingCartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
