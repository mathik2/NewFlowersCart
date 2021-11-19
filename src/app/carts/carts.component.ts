import { Component, OnInit } from '@angular/core';
import { Carts } from '../models/Carts';
import { FlowersServiceService } from '../services/flower.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  service:FlowersServiceService=new FlowersServiceService();
  Cart:Carts[];
  total:number=0;
 constructor(service:FlowersServiceService) {
   this.service=service;
   this.Cart=service.Cart;

   
  }

  ngOnInit(): void {
  }

}
