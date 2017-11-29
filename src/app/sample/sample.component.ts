import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  // Initialize response with empty string
  response = '';
  response2 = '';  //array of image urls
  images = [];
  // NASA_URL = 'https://images-api.nasa.gov/';
  // API_KEY = 'MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';

  constructor(private _sampleService: SampleService) { }

  ngOnInit() {
  }

  onClick() {
    // Call the service method, passing the onResponse as the callback
    // binding 'this' is required to avoid "this is undefined error"
    this._sampleService.getData(this.onResponse.bind(this));
  }

  /*
   * The HTTP request is aynchronous.
   * Therefore a callback function is required to get back the response.
   */
  onResponse(res: string) {
    this.response = res;
  }

  onResponse2(res: string) {
    this.response2 = res;
    console.log(res);
  }

  fillArray() {
    //use response2 result to fill the array with image urls
    return null;
  }

  getNASA(){
    this._sampleService.searchNasa(this.onResponse2.bind(this));
  }

}
