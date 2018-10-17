import { Component } from '@angular/core';

/**
 * Generated class for the EventsWeekComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'events-week',
  templateUrl: 'events-week.html'
})
export class EventsWeekComponent {

  text: string;

  constructor() {
    console.log('Hello EventsWeekComponent Component');
    this.text = 'Hello World';
  }

}
