import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TdfFormsComponent } from './tdf-forms/tdf-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';


const routes: Routes = [
  {path:'data-binding', component:DataBindingComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'tdf-forms', component:TdfFormsComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  {path:'http-demo', component: HttpDemoComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
