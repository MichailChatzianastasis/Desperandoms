import { Injectable } from '@angular/core';
import { TICKETS } from './mock-tickets';
import { Tickets } from './tickets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private id: number;

  tickets = TICKETS;

  // private ticketsUrl='assets/tickets.json';

  // private ticketsUrl='assets/allTickets.json';

  private ticketsUrl = 'http://localhost:8080/webapp/tickets';

  constructor(private http: HttpClient) { }


  getSingleTicket(ticketId: number): Observable<Tickets[]> {
    return this.http.get<Tickets[]>('http://localhost:8080/webapp/tickets/oneTicket/' + ticketId);
  }

  getTickets(): Observable<Tickets[]> {
    console.log('creating tickets from this Url:', this.ticketsUrl);
    return this.http.get<Tickets[]>(this.ticketsUrl);

  }


  updateTicket(userId: string, ticketId: number): Observable<Tickets> {
    return this.http.get<Tickets>('http://localhost:8080/webapp/tickets/addTicket/' + userId + "/" + ticketId);
  }




  showBasket(userId: string): Observable<Tickets[]> {
    return this.http.get<Tickets[]>('http://localhost:8080/webapp/tickets/showBasket/' + userId)
  }

  cancelTicket(userId: string, ticketId: number): Observable<boolean> {
    console.log('I am in cancelTicket()');
    return this.http.get<boolean>('http://localhost:8080/webapp/tickets/removeTicket/' + userId + "/" + ticketId);
  }
  
  purchaseBasket(userId: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8080/webapp/tickets/purchaseBasket/' + userId)
  }


}


