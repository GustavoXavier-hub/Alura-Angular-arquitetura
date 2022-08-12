import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
{
  path:'home',
  loadChildren:()=> import('./home/home.module').then((m) => m.HomeModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
