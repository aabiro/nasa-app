import { Injectable } from '@angular/core';

@Injectable()
export class DcmaService {
privacy: string;
dcma: string;
notices = [];
  // courseName;
  constructor() { }

  getNotices() :string[]{
      //courses = [];
      return this.notices;
  }

  saveNotices(newNotice: string){
    this.notices.push("URL : " + newNotice + "   Time Recieved : ");
}

}
