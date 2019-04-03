import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../mock-event';

import { Event } from '../events';
import { EventService } from '../event.service';

import { Ticket } from '../ticket';

import { AlertsService } from 'angular-alert-module';


const RESERVED = 0;

@Component({
  selector: 'app-event-details',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {




  // events: Event[];
  events = EVENTS;
  selectedEvent: Event;
  eventTickets: Ticket[];

  selectedTicket: Ticket;

  constructor(private eventService: EventService, private alerts: AlertsService) { }

  ngOnInit() {
    this.getEvents;
    this.alerts.setDefaults('timeout', 3);
    this.alerts.setConfig('warn', 'icon', 'warning');
    // this.getEvents();
  }

  reserve(ticket: Ticket): void {
    this.selectedTicket = ticket;

    if (this.selectedTicket.availability === 1) {
      this.selectedTicket.availability = RESERVED;
    }
    else {
      this.alerts.setMessage('Seat has already been reserved', "error");
    }
  }


  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  onSelect(event: Event) {
    this.selectedEvent = event;
    this.eventTickets = event.tickets;
  }

}
