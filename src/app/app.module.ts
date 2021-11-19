import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowersComponent } from './flowers/flowers.component';
import { ItemsComponent } from './items/items.component';
import { CartsComponent } from './carts/carts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowersServiceService } from './services/flower.service';
import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
var myRoutes:Route[]=[
  {path:'item',component:ItemsComponent},
  {path:'flower',component:FlowersComponent},
  {path:'cart',component:CartsComponent},
  {path:'register',component:RegisterComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    FlowersComponent,
    ItemsComponent,
    CartsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [FlowersServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
