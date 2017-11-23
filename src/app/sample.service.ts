import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }

  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  getData(callback_fun) {
      // this.http.get('/api').subscribe(data => {
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV').subscribe(data => {
          console.log(data);
          callback_fun(data['url']);
      });
  }

}
