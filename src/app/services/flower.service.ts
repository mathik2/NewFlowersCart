import { Flowers } from "../models/Flowers";
import { Carts } from "../models/Carts";
export class FlowersServiceService {
    flowers:Flowers;
    flower:Flowers[];
    Cart:Carts[];
    total:number;
    constructor() { 
      this.flowers=new Flowers();
      this.flower=[new Flowers(22,"SUN FLOWER",110,2)];
      this.Cart=new Array();
      this.total=0;
    }
    AddFlowers(flowerr:Flowers){
      var flow:Flowers=new Flowers();
      var flag=0;
      this.flower.forEach(element=>{
        if(element.ID==flowerr.ID){
          flag=1;
        }
      });
      if(flag==0){
        this.flower.push(flowerr);
        return flag;
      }
      return flag;
    }
    DisplayFlowers(){
      this.flower.forEach(element=>{
        console.log(element);
      })
    }
    AddToCart(ID:any){
       var flag=0;
       console.log(ID);
       if(this.Cart.length>0){
        if(this.flower[this.flower.findIndex(ele=>ele.ID==ID)].qty>0){
          if(this.Cart.findIndex(ele=>ele.ID==ID)!=-1){
            this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].qty+=1
            this.ReduceFlower(ID);
          }
          else{
            var flow:Flowers=new Flowers();
            flow=this.GetElement(ID);
        
            var cart:Carts=new Carts(flow.ID,flow.Name,flow.Price,1);
            this.Cart.push(cart);
            this.ReduceFlower(ID);
            console.log("First TIme");
            console.log("Cart Size is  "+this.Cart.length);
        
           }
         }
        else{
            this.RemoveFlower(ID);
        }  
        this.DisplayCart();
        
        }
       else
       {
        var flow:Flowers=new Flowers();
        flow=this.GetElement(ID);
        if(flow.qty>0){
        var cart:Carts=new Carts(flow.ID,flow.Name,flow.Price,1);
        this.Cart.push(cart);
        this.ReduceFlower(ID);
        console.log("First TIme");
       
        console.log("Cart Size is  "+this.Cart.length);
        }
        else{
          this.RemoveFlower(ID);     
         }
       
        this.DisplayCart();
       } 
     
    }
    DisplayCart(){
      this.Cart.forEach(element=>{console.log(element)});
    }
    GetElement(ID:any):Flowers{
      var flow:Flowers=new Flowers();
      console.log(ID);
      this.flower.forEach(element=>{
        
        if(element.ID==ID){
          flow=element;
        }
      });
      return flow;
    }
    RemoveFlower(ID:any)
    {
      
      for(var i=0;i<this.flower.length;i++){
        if(this.flower[i].ID==ID){
            this.flower.splice(i,1);
            console.log("Removed "+ID);
            break;
          }
        }
    }
    ReduceFlower(ID:any){
      
      for(var i=0;i<this.flower.length;i++){
        if(this.flower[i].ID==ID){
           this.flower[i].qty-=1;
           console.log("Reduced "+ID);
           break;
        }
        }
    }
    RemoveCarts(ID:any){
      if(this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].qty>1){
        this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].qty-=1;
        if(this.flower.findIndex(ele=>ele.ID==ID)==-1){
          var floww:Flowers=new Flowers(this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].ID,this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].Name,this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].Price,1);
          this.flower.push(floww);
        }
        else{
          this.flower[this.flower.findIndex(ele=>ele.ID==ID)].qty+=1;
        }
      }
      else{
        if(this.flower.findIndex(ele=>ele.ID==ID)==-1){
          var floww:Flowers=new Flowers(this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].ID,this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].Name,this.Cart[this.Cart.findIndex(ele=>ele.ID==ID)].Price,1);
          this.flower.push(floww);
        }
        else{
          this.flower[this.flower.findIndex(ele=>ele.ID==ID)].qty+=1;
        }
        this.Cart.splice(this.Cart.findIndex(ele=>ele.ID==ID),1);
      }
    }
    SetTotal(){
      var subtotal=0;
      this.total=0;
      this.Cart.forEach(ele=>{
        subtotal=ele.Price*ele.qty;
        this.total+=subtotal;
      });
      console.log("Total is: "+this.total);
     return this.total;
    }
  }