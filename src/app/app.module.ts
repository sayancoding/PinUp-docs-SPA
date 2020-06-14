import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {QuillModule, QuillService} from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './home/docs-list/docs/docs.component';
import { EditorComponent } from './home/editor/editor.component';
import { DocsListComponent } from './home/docs-list/docs-list.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/auth.service';
import { TokenInterceptorService } from './service/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    DocsComponent,
    EditorComponent,
    DocsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [
    AuthService,
    QuillService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
