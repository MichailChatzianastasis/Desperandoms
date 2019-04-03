import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventService }  from '../event.service';

import {Event} from '../events';
import { Ticket } from '../ticket';
import { AlertsService } from 'angular-alert-module';

const RESERVED = 0;

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {



  @Input() event: Event;
  eventTickets: Ticket[];

  selectedTicket: Ticket;

  constructor(private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private alerts:AlertsService) { }

  ngOnInit():void {

    this.getEvent();
    this.alerts.setDefaults('timeout',3);
    this.alerts.setConfig('warn','icon','warning');

  }


  findTickets(event: Event): void {
      this.eventTickets=event.tickets;
  }

  reserve(ticket: Ticket): void {
    this.selectedTicket = ticket;

    if (this.selectedTicket.availability === 1) {
      this.selectedTicket.availability = RESERVED;
    }
    else{
        this.alerts.setMessage('Seat has already been reserved',"error");
    }
  }


  getEvent(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  goBack(): void{
    this.location.back();
  }

}
