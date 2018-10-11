import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  closeNews: boolean = true;
  myDate: number;

  constructor(public navCtrl: NavController) {
    this.myDate = Date.now();
  }
  // ###Header###
  help() {}
  calendary() {}
  // ###statement###
  CloseStatement() {
    this.closeNews = !this.closeNews;
  }
  // ###Weeks###
  SwipeWeek(e) {}
}
