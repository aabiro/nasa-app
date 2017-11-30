import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service'
//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  NASA_SEARCH_URL = 'https://images-api.nasa.gov/search?q=';
  // API_KEY = 'MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';
//  nasa_search = 'https://images-api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';
  ImageArray = [];
  query= "mars";

  // Initialize response with empty string
  response = '';
  response2 = '';  //array of image urls
  //query = '';

  // NASA_URL = 'https://images-api.nasa.gov/';
  // API_KEY = 'MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';

  constructor(private _sampleService: SampleService, private http: HttpClient) { }

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



  getImages(callback_fun) {
      this.http.get(this.NASA_SEARCH_URL + this.query).subscribe(data => {
              console.log(data);
      var res = data;
      console.log(res);
      for (var key in res){
        if(res.hasOwnProperty(key)){
          console.log(key);
          var items = res[key]['items'];
          var itemArr = [];
          for(var i = 0; i < items.length; i ++){
            itemArr.push(items[i]);
          }
          console.log(items);
          for(var i = 0; i < itemArr.length; i++){
            if(itemArr[i]['links'][0]['render'] == 'image'){
              this.ImageArray.push(itemArr[i]['links'][0]['href']);
            }
          }
          console.log(this.ImageArray);
        }
      }
      callback_fun(this.ImageArray);
  });
  }


  //real one
  getNASA(){
  //console.log(event);
  //this.query = ((<HTMLInputElement>event.target).value);
  //  this._sampleService.query = ((<HTMLInputElement>event.target).value);
  //  this._sampleService.getImages(this.onResponse2.bind(this));
  this.getImages(this.onResponse2.bind(this));
  }

  //call to backend

  // getNASA(){
  //   this._sampleService.searchNasa(this.onResponse2.bind(this));
  // }

}
