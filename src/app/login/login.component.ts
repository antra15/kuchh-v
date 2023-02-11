import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  constructor(private ser:ServiceService, private router:Router){}
  

    formValue = new FormGroup({

         name : new FormControl (''),
         email:new FormControl (''),
         password:new FormControl('')
    })

    

 submit(){
  const i = this.formValue.value
  // console.log(this.formValue.value)
  this.ser.postData(i).subscribe((res:any)=>{
    this.router.navigate(['/view-data'])
  })
 }


}