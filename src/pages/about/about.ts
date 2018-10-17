import { Component } from "@angular/core";
import { NavController, Toggle, Checkbox } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  closeNews: boolean = true;
  toggleCheckBox: boolean = false;
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
  // ###Event###
  Agree() {
    this.toggleCheckBox = !this.toggleCheckBox;
  }
}
