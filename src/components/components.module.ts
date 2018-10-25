import { NgModule } from '@angular/core';
import { EventsWeekComponent } from './events-week/events-week';
import { IonicModule } from 'ionic-angular'
import { EventsSoonComponent } from './events-soon/events-soon';
@NgModule({
	declarations: [EventsWeekComponent,
    EventsSoonComponent],
	imports: [IonicModule],
	exports: [EventsWeekComponent,
    EventsSoonComponent]
})
export class ComponentsModule { }
