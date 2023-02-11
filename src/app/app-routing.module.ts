import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [

  {path:'',redirectTo:'/view-data',
  pathMatch:'full'},
  {path:'view-data',component :ViewDataComponent
  },
  {path:'login',component :LoginComponent
  },
  {path:'update/:id',component :UpdateformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
