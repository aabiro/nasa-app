import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { DcmaComponent } from './dcma/dcma.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CollectionDetailComponent } from './collections/collection-detail/collection-detail.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'callback',
        component: CallbackComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      // {
      //   path: '**',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // },
      {
        path: 'public',
        component: PublicPageComponent
      },
      {
        path: 'detail',
        component: CollectionDetailComponent
      },
      {
        path: 'privacy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'admin',
        component: AdminDashComponent
      },
      {
        path: 'dcma',
        component: DcmaComponent
      },
      {
        path: 'private',
        component: PrivatePageComponent
      }
    ])
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
