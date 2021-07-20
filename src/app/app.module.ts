import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './front/home/home.component';
import { FrontRoutingModule } from './front/front-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front/header/header.component';
import { FooterComponent } from './front/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './front/main/main.component';
import { IndiaComponent } from './front/india/india.component';
import { OthercountriesComponent } from './front/othercountries/othercountries.component';
import { ContactComponent } from './front/contact/contact.component';
import { SignupComponent } from './front/signup/signup.component';
import { FormsModule,NgForm } from '@angular/forms';
import { LoginComponent } from './front/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { LeftsideComponent } from './admin/leftside/leftside.component';
import { ContentAreaComponent } from './admin/content-area/content-area.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthServiceService } from './admin/services/auth-service.service';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { ResourcesComponent } from './front/resources/resources.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ForgotPwdComponent } from './front/forgot-pwd/forgot-pwd.component';
import { TableComponent } from './admin/table/table.component';


 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    IndiaComponent,
    OthercountriesComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    FrontComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    LeftsideComponent,
    ContentAreaComponent,
    NavbarComponent,
    AdminFooterComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    MainComponent,
    ResourcesComponent,
    DashboardCardComponent,
    ForgotPwdComponent,
    TableComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FrontRoutingModule,
    AdminRoutingModule,
    FormsModule,
    
    HttpClientModule,
    Ng2GoogleChartsModule,
     
        
    
  ],
  exports:[
    ContactComponent,
    MainComponent,
    IndiaComponent,
    OthercountriesComponent,
    SignupComponent,
    LoginComponent,
     
     
  ],

  providers: [
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
