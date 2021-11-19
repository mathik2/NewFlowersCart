import { Component, OnInit } from '@angular/core';
import { Flowers } from '../models/Flowers';
import { FlowersServiceService } from '../services/flower.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  flowerService:FlowersServiceService;
  flowers:Flowers[];
    constructor(flowerService:FlowersServiceService) {
      this.flowerService=flowerService; 
      this.flowers=this.flowerService.flower;
    }
  Cart(ID:any){
    this.flowerService.AddToCart(ID);
  }
  ngOnInit(): void {
  }

}
