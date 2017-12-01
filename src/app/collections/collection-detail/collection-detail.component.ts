import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CollectionsComponent } from './collections.component';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
 @Input() col: CollectionModel;

  constructor(
    private route: ActivatedRoute,
    //private colService: HeroService,
    private location: Location
  ) {}

  }
