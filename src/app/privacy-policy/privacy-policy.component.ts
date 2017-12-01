import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { PrivacyModel } from './core/models/privacy.model';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  privListSub: Subscription;
  priv: PrivacyModel[];
  error: boolean;

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._getPriv();
  }

  private _getPriv() {
    this.privListSub = this.api
      .getPrivacy$()
      .subscribe(
        res => {
          //no error but nothing comes back
          this.priv = res[1]['description'];
          //console.log(res[0]['description']);
        },
        err => {
          console.error(err);
        }
      );
  }

  ngOnDestroy() {
    this.privListSub.unsubscribe();
  }

  ngAfterViewInit() {
  this.message = 'all done loading :)'
  this.cdr.detectChanges();
}

}
