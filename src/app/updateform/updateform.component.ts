import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css'],
})
export class UpdateformComponent implements OnInit {
  constructor(private router: ActivatedRoute, private ser: ServiceService,private rou:Router) {}
  formValue = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    
    this.ser.getDataforUpdate(this.router.snapshot.params['id']).subscribe((res: any) => {
        this.formValue = new FormGroup({
          name: new FormControl(res['name']),
          email: new FormControl(res['email']),
          password: new FormControl(res['password']),
        });
      });
  }
update(){
  this.ser.updateData(this.router.snapshot.params['id'],this.formValue.value).subscribe((res:any)=>{
    this.rou.navigate(['view-data'])
  })

  
}

}
