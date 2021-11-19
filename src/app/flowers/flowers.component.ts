import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flowers } from '../models/Flowers';
import { FlowersServiceService } from '../services/flower.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  flowers:Flowers;
  flowerService:FlowersServiceService;
  style:string;
  myForm:FormGroup;
    constructor(flowerService:FlowersServiceService) { 
     this.flowers=new Flowers();
     this.flowerService=flowerService;
     this.style="id";
     this.myForm = new FormGroup({
      "uid":new FormControl(null,[Validators.required]),
      "uname":new FormControl(null,[Validators.required]),
      "uprice":new FormControl(null,[Validators.required]),
      "uquantity":new FormControl(null,[Validators.required])
      
    });
    }

    public get uid() : any {
      return this.myForm.get("uid");
    }
  
    public get uname() : any {
      return this.myForm.get("uname");
    }
    public get uprice() : any {
      return this.myForm.get("uprice");
    }
    public get uquantity() : any {
      return this.myForm.get("uquantity");
    }
  PutFlowers(){
    
    var flag=this.flowerService.AddFlowers(this.flowers);
    if(flag==1){
      this.style="id1";
    }
    else{
      this.style="id"
    }
    this.flowers=new Flowers();
 /*    if(this.myForm.valid)
    {
      this.user.id = this.uid.value;
      this.user.password = this.pass.value;
      this.user.name = this.uname.value;
      this.userService.registerUsingAPI(this.user).subscribe((data)=>{
        console.log(data);
      
      });  
    } */
  }
  ngOnInit(): void {
  }

}
