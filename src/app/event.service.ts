import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Event } from './events';
import { EVENTS } from './mock-event';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {




  private eventsUrl = 'assets/events.json';



  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }


  getEvent(id: number): Observable<Event> {
    return of(EVENTS.find(event=>event.eventId===id));
  }


  // getEvents (): Observable<Event[]> {
  //   return this.http.get<Event[]>(this.eventsUrl)
  // .pipe(
  //   tap(heroes => this.log(`fetched heroes`)),
  //   catchError(this.handleError('getHeroes', []))
  // );
  // }

  // private log(message: string) {
  //   this.messageService.add('HeroService: ' + message);
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


}
