import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {
  pageTitle = 'My Image Collections';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
