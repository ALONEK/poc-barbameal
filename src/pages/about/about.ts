import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  closeNews: boolean = true;
  constructor(public navCtrl: NavController) {}
  // ###Header###
  help() {}
  calendary() {}
  // ###statement###
  CloseStatement() {
    this.closeNews = !this.closeNews;
    console.log("dupa");
  }
  // ###Weeks###
}
