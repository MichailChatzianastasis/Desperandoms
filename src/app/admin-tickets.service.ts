import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { ResetPasswordUser } from './resetPasswordUser';
import { Observable } from '../../node_modules/rxjs';
import { TicketsUser } from './ticketsUser';
import { User } from './user';
import { UserForLogin } from './userForLogin';
import { AccessLevel } from './accessLevel';
import { Tickets } from './tickets';
import { AdminTicket } from './adminTicket';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminTicketsService {

  constructor(private http: HttpClient) { }

  private passwordUrl = 'http://localhost:8080/webapp/users/ressetpassword';


  getAllUsers(accessLevel: AccessLevel): Observable<UserForLogin[]> {
    return this.http.post<UserForLogin[]>('http://localhost:8080/webapp/users/getAllUsers',accessLevel,httpOptions);
  }




  getAllReservedTickets(): Observable<TicketsUser[]> {
    return this.http.get<TicketsUser[]>('http://localhost:8080/webapp/tickets/getAllReservedTickets');
  }


  resetPassword(user: ResetPasswordUser): Observable<string> {
    return this.http.post<string>(this.passwordUrl, user, httpOptions);
  }

  cancelTicket(id:number): Observable<TicketsUser>{
    return this.http.get<TicketsUser>('http://localhost:8080/webapp/tickets/cancelTicket/'+id);
  }

  addTicket(ticket:AdminTicket):Observable<Tickets>{
    return this.http.post<Tickets>('http://localhost:8080/webapp/tickets/', ticket, httpOptions);
  }

}
