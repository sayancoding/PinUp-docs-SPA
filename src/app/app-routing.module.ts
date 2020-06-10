import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'sign-in'},
  {path:'sign-in',pathMatch:'full',component:SignInComponent},
  {path:'sign-up',pathMatch:'full',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
