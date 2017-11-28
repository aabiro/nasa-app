import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { CollectionsComponent } from './collections/collections.component';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {
  pageTitle = 'Top 10 Public Image Collections';

  constructor(private api: ApiService, public auth: AuthService) { }

  ngOnInit() {
  }

}
