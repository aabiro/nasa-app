import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { StarRatingModule } from 'angular-star-rating';
//import { ApiService } from './api.service';
import { ApiService } from './core/api.service';
import { AuthService } from './auth/auth.service';
import { DcmaService } from './dcma.service';
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

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DcmaComponent } from './dcma/dcma.component';
import { CollectionDetailComponent } from './collections/collection-detail/collection-detail.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';

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
    DcmaComponent,
    PrivacyPolicyComponent,
    CollectionDetailComponent,
    NewCollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    ApiService,
    AuthService,
    SampleService,
    DcmaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
