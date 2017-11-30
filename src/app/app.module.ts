import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StarRatingModule } from 'angular-star-rating';
//import { ApiService } from './api.service';
import { ApiService } from './core/api.service';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

import { SampleComponent } from './sample/sample.component';
import {SampleService} from './sample.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { RegisterComponent } from './register/register.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoadingComponent } from './core/loading.component';
import { CollectionsComponent } from './collections/collections.component';
import { MyEventsComponent } from './my-events-component/my-events-component.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { DmcaComponent } from './dmca/dmca.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    ProfileComponent,
    SampleComponent,
    HeaderComponent,
    FooterComponent,
    PublicPageComponent,
    PrivatePageComponent,
    RegisterComponent,
    SearchBarComponent,
    LoadingComponent,
    CollectionsComponent,
    MyEventsComponent,
    AdminDashComponent,
    DmcaComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    ApiService,
    AuthService,
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
