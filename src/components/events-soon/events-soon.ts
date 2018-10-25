import { Component } from '@angular/core';

/**
 * Generated class for the EventsSoonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'events-soon',
  templateUrl: 'events-soon.html'
})
export class EventsSoonComponent {

  text: string;

  constructor() {
    console.log('Hello EventsSoonComponent Component');
    this.text = 'Hello World';
  }

}
