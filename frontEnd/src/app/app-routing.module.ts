import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"create", component:CreateComponent},
  {path:"formArray", component:FormArrayComponent},
  {path:"",redirectTo:"create", pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
