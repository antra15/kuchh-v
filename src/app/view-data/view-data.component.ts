import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent {
constructor(private ser:ServiceService){
  this.get();
}

data:any;

get(){
  this.ser.getData().subscribe((res)=>{
    this.data = res;
  })            
  
}
delete(data:any){
  this.ser.deleteData(data.id).subscribe((res)=>{
    this.get();
  }
  )
}
}
