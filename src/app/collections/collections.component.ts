import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
//import { Title } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
//import { UtilsService } from './../../core/utils.service';
//import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { CollectionModel } from './core/models/collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
//  pageTitle = 'Image Collections';
  col: CollectionModel;

  colListSub: Subscription;
  colList: CollectionModel[];
  selectedCol: CollectionModel;
  //filteredCols: CollectionModel[];
  //loading: boolean;

  rating = 0;
  ratingSum: number;
  error: boolean;
  query: '';

  constructor(
    //private title: Title,
    //public utils: UtilsService,
    private api: ApiService,
    //public fs: FilterSortService
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {
    //this.title.setTitle(this.pageTitle);
    this._getCollectionList();
  }

  private _getCollectionList() {
  //  this.loading = true;
    // Get future, public events
    this.colListSub = this.api
      .getCollections$()
      .subscribe(
        res => {
          this.colList = res;
          console.log(res);
        },
        err => {
          console.error(err);
        //  this.loading = false;
        //  this.error = true;
        }
      );
  }


  searchEvents() {
    //this.filteredEvents = this.fs.search(this.eventList, this.query, '_id', 'mediumDate');
  }

  resetQuery() {
    //this.query = '';
    //this.filteredEvents = this.eventList;
  }

  onSelect(col: CollectionModel): void {
  this.selectedCol = col;
  console.log(selectedCol);
}

  ngOnDestroy() {
    this.colListSub.unsubscribe();
  }

  ngAfterViewInit() {
  this.message = 'all done loading :)'
  this.cdr.detectChanges();
}

}
