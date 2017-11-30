import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { DcmaModel } from './core/models/dcma.model';

@Component({
  selector: 'app-dcma',
  templateUrl: './dcma.component.html',
  styleUrls: ['./dcma.component.css']
})
export class DcmaComponent implements OnInit {
  dmcaListSub: Subscription;
  dcma: DcmaModel[];
  error: boolean;

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this._getDMCA();
  }

  private _getDMCA() {
    this.dmcaListSub = this.api
      .getDcma$()
      .subscribe(
        res => {
          //no error but nothing comes back
          this.dcma = res;
          console.log(res);
        },
        err => {
          console.error(err);
        }
      );
  }

  ngOnDestroy() {
    this.dmcaListSub.unsubscribe();
  }

  ngAfterViewInit() {
  this.message = 'all done loading :)'
  this.cdr.detectChanges();
}

}
