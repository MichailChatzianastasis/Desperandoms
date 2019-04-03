import { Component, OnInit } from '@angular/core';
import { Tickets } from '../tickets';
import { TICKETS } from "../mock-tickets";
import { AlertsService } from 'angular-alert-module';
import { TicketsService } from '../tickets.service';
import { tick } from '@angular/core/testing';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {


  userId: string=this.appComponent.userId;
  private singeTicketforCheck:Tickets[]=null;
  message: string = 'Here you will see your ticket reservation results';
  ticket: Tickets[];
  selectedTicket: Tickets;
  private i: number;

  email: string = this.appComponent.email;

  constructor(private alerts: AlertsService, private ticketsService: TicketsService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getTickets();
    this.alerts.setDefaults('timeout', 3);
    this.alerts.setConfig('warn', 'icon', 'warning');
  }

  getTickets() {

    if (this.email) {

      this.ticketsService.getTickets()
        .subscribe((allTickets: Tickets[]) => {
          console.log(allTickets.length);

          this.ticket = allTickets;

          console.log(allTickets);


        }

        );
    }

  }


  reserve(id: number): void {



    console.log('reserving ticket with id ' + id);

   this.ticketsService.getSingleTicket(id).subscribe((ticket:Tickets[])=>{
   console.log(ticket);
   this.singeTicketforCheck=ticket;
   console.log(this.singeTicketforCheck);


       if ((this.singeTicketforCheck[0].isReserved) === 0 && !(this.userId===null)) {
      this.ticketsService.updateTicket(this.userId,id).subscribe((ticket: Tickets) => this.selectedTicket = ticket);
      this.ticket[id - 1].isReserved = 1;
      this.message = "You have successfully reserved ticket with id: " + this.ticket[id - 1].ticketId+'. Proceed to basket for checkout';
      document.getElementById("ticketMessage").style.backgroundColor = "green";
    } else {
      // this.alerts.setMessage('Seat has already been reserved', "error");
      this.message = "Ticket  with Id:" + this.ticket[id - 1].ticketId + ", Already reserved";
      document.getElementById("ticketMessage").style.backgroundColor = "red";
    }
  });

   console.log(this.singeTicketforCheck);


   

  }

}
