import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitButton } from './Attribute Directive/button.css';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authGuard } from './services/guard/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { LoginInterceptor } from './services/login-interceptor';
import { LoadinSpinnerComponent } from './shared/loadin-spinner/loadin-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    SignUpComponent,
    SubmitButton,
    LoginComponent,
    LoadinSpinnerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoginInterceptor,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
