import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileArray = this._makeProfileArray(this.auth.userProfile);
  pic = this._makeProfilePic(this.auth.userProfile);

  constructor(public auth: AuthService) { }

  ngOnInit() {
    console.log(this.auth.userProfile);
  }

  private _makeProfileArray(obj) {
    const keyPropArray = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyPropArray.push(key + ': ' + obj[key]);
      }
    }
    return keyPropArray;
  }

//   private _makeProfilePic(obj) {
//     for (const key in obj) {
//       if (key==picture) {
//         return obj[key];
//       }
//     }
//     return '../assets/images/nasa_image.png';
// }

  private _makeProfilePic(obj) {
    return obj.picture;
  }

}
