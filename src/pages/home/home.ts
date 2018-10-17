import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchBar: boolean = false;

  constructor(public navCtrl: NavController) {

  }
  searchBarView() {
    this.searchBar = !this.searchBar;
  }
}
