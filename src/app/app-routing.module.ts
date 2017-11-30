import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { DmcaComponent } from './dmca/dmca.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

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
        path: 'privacy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'admin',
        component: AdminDashComponent
      },
      {
        path: 'dmca',
        component: DmcaComponent
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
