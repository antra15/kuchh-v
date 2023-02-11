import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private https:HttpClient) { }

  getData(){
  return  this.https.get('http://localhost:3000/posts');
  }

  postData(i:any ){
   return this.https.post('http://localhost:3000/posts',i);
  }
  deleteData( id:number){
  return this.https.delete('http://localhost:3000/posts/'+id);
  }


  getDataforUpdate(id:any){
    return this.https.get('http://localhost:3000/posts/'+id);
    }


    updateData(id:any,data:any){
      return this.https.put('http://localhost:3000/posts/'+id, data);
    }
}
