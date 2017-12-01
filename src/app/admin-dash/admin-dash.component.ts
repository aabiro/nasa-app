import { Component, OnInit } from '@angular/core';
import { DcmaService } from '../dcma.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css'],
  //providers: [DcmaService]
})
export class AdminDashComponent implements OnInit {
  notice = "";
  notices;
  date = new Date();
  http: HttpClient;
  privacy = "";
  d: dcmaService;
  dcma = "";

  //need reference to component
  constructor(private dcmaService: DcmaService, private http: HttpClient) {
    this.notices = dcmaService.getNotices();
    //this.http = http;

    //this.d = dcmaService;
  }

  saveNotices(event: any) {
    //console.log(event);
    this.dcmaService.saveNotices(this.notice);
  }

  updatePriv() {
    this.http.put('/api/privacy/5a206b3f6f52db4138dfeb91').subscribe(data => {
        console.log(data);
        //need to set the description equal to new privacy !!

        //callback_fun(data['url']);
        //console.log(data);
        //privacy = data['description'];
        //callback_fun(data['url']);
    });
}
    //need get dmca, get notices, get privacy
    //need delete notices
    //need put dcma, privacy

getPriv(){
  this.http.get('/api/privacy').subscribe(data => {
       this.privacy = data[1]['description'];
    }
}

getDcma(){
  this.http.get('/api/dcma').subscribe(data => {
      this.dcma = data[0]['description'];
    }
}


  ngOnInit() {
    //this.notices = this.dcmaService.getNotices();
    this.getDcma();
    this.getPriv();
}

}
