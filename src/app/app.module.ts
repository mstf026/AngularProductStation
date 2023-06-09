import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';
import { OrderComponent } from './components/order/order.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { SubpieceComponent } from './components/subpiece/subpiece.component';
import { ManufactureAddComponent } from './components/manufacture-add/manufacture-add.component';
import { DepartmentComponent } from './components/department/department.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { SubpieceAddComponent } from './components/subpiece-add/subpiece-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    OrderComponent,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    SubpieceComponent,
    ManufactureAddComponent,
    DepartmentComponent,
    OrderAddComponent,
    SubpieceAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
