import { NgModule } from '@angular/core';
import { EventsWeekComponent } from './events-week/events-week';
import { IonicModule } from 'ionic-angular'
@NgModule({
	declarations: [EventsWeekComponent],
	imports: [IonicModule],
	exports: [EventsWeekComponent]
})
export class ComponentsModule { }
