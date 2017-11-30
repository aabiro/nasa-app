import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {
  // NASA_URL = 'https://images-api.nasa.gov/';
  // API_KEY = 'MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';
  nasa_search = 'https://images-api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV';

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

  searchNasa(callback_fun) {
       this.http.get('/api').subscribe(data => {
      // this.http.get('https://images-api.nasa.gov/search?q=mars').subscribe(data => {
          console.log(data);
          callback_fun(data);
          //callback_fun(data[0].items[0]);
      });
  }
//DMCA takedown full collection have a link to the collection , what the content users create on the website
}
