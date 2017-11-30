import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {
  NASA_SEARCH_URL = 'https://images-api.nasa.gov/search?q=';
  // API_KEY = 'MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';
  nasa_search = 'https://images-api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';
  ImageArray = [];
  query= '';
  constructor(private http: HttpClient) { }

  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */

  //this works!
  getData(callback_fun) {
      // this.http.get('/api').subscribe(data => {
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV').subscribe(data => {
          console.log(data);
          callback_fun(data['url']);
      });
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

  //using the backend

  searchNasa(callback_fun) {
       this.http.get('/api').subscribe(data => {
      // this.http.get('https://images-api.nasa.gov/search?q=mars').subscribe(data => {
          //console.log(data.constructor);
          var res = JSON.parse(data);
          console.log(res);

          // for(var key in res){
          //   array.push
          // }

          for (var key in res){
            if(res.hasOwnProperty(key)){
              console.log(key);
              var items = res[key]['items'];
              var itemArr = [];

              //console.log(items[1]);
              //collections
              //for(var key in )
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
              // for(var key in items){
              //   if (items.haOwnProperty(key)){
              //     var links = items[key]['links'];
              //     console.log(links);
              //   }
              // }
            }
          }

          //callback_fun(res['collection']['items'][1]['links'][0]['href']);
          callback_fun(this.ImageArray);
      });
  }
//DMCA takedown full collection have a link to the collection , what the content users create on the website
}
