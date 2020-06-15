import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './home/editor/editor.component';
import { DocsListComponent } from './home/docs-list/docs-list.component';
import { AuthGuard } from './guard/auth.guard'
import { ResetComponent } from './reset/reset.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: 'sign-in', pathMatch: 'full', component: SignInComponent },
  { path: 'sign-up', pathMatch: 'full', component: SignUpComponent },
  { path: 'reset', pathMatch: 'full', component: ResetComponent },
  { path: 'reset-password/:token', pathMatch: 'full', component: ResetPasswordComponent },
  { path: 'home', component:HomeComponent ,
    canActivate:[AuthGuard],
    children:[
      {path:'',pathMatch:'full',redirectTo:'docs'},
      {path:'docs',pathMatch:'full',component:DocsListComponent},
      {path:'editor',pathMatch:'full',component:EditorComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
