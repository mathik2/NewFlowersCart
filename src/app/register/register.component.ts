import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  rePassword: string;
  myForm:FormGroup;
  constructor(private userService: UserService,private router:Router) {
    this.user = new User();
    this.rePassword = "";
    this.myForm = new FormGroup({
      "uid":new FormControl(null,[Validators.required]),
      "pass":new FormControl(null,[Validators.required]),
      "uname":new FormControl(null,[Validators.required,Validators.minLength(3)])
    });
  }
  public get uid() : any {
    return this.myForm.get("uid");
  }
  public get pass() : any {
    return this.myForm.get("pass");
  }
  public get uname() : any {
    return this.myForm.get("uname");
  }

  register() {
    console.log("From the register component")
    console.log(this.user);
    console.log("--------------------------");
    this.userService.registerUsingAPI(this.user).subscribe((data)=>{
      console.log(data);
    });
    /*    this.userService.registerUsingAPI(this.user).subscribe((data)=>{
         console.log(data);
       });
    if (this.myForm.valid) {
      this.user.id = this.uid.value;
      this.user.password = this.pass.value;
      this.user.name = this.uname.value;
      this.userService.registerUsingAPI(this.user).subscribe((data) => {
        console.log(data);
      })
    } */
    if(this.myForm.valid)
    {
      this.user.id = this.uid.value;
      this.user.password = this.pass.value;
      this.user.name = this.uname.value;
      this.userService.registerUsingAPI(this.user).subscribe((data)=>{
        console.log(data);
        this.router.navigate(["flower"])
      
      });  
    }
  }
  ngOnInit(): void {
  }

}
