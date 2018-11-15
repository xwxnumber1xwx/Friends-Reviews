"use strict";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  product: string;
  friend: string;
  results: string;

  constructor() { }

  ngOnInit() {
  }

  search(): void {
    console.log('it works! ' + this.product + ' ' + this.friend);
    this.results = 'it works! ' + this.product + ' ' + this.friend;
  };

}
