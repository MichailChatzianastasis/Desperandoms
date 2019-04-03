import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AdminTicketsService } from '../admin-tickets.service';
import { TicketsService } from '../tickets.service';
import { ResetPasswordUser } from '../resetPasswordUser';
import { TicketsUser } from '../ticketsUser';
import { UserForLogin } from '../userForLogin';
import { AccessLevel } from '../accessLevel';
import { AdminTicket } from '../adminTicket';
import { Tickets } from '../tickets';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  resetMessage:string=null;
  ticketMessage:string=null;

  adminTicket:AdminTicket={eventName:'',eventTime:'',price:0};
  addedTicket:TicketsUser;
  message:string=null;
  cancelMessage:string=null;
  allReservedTickets:TicketsUser[];
  allUsers:UserForLogin[];
  user:ResetPasswordUser={userName:'',email:'',password:''};
  canceledTicket:TicketsUser;

  accessLevel:AccessLevel={accessLevel:this.appComponent.accessLevel};

  constructor(private appComponent: AppComponent,private adminTicketsService:AdminTicketsService,
    private ticketsService:TicketsService) { }

  ngOnInit() {
  }


  changePassword(){
    this.cancelMessage=null;
    this.resetMessage='Changed the password of a user';
    this.adminTicketsService.resetPassword(this.user).subscribe((message:string)=>this.message=message);
  }

  getAllReservedTickets(){
    this.ticketMessage=null;
    this.cancelMessage=null;
    this.allUsers=null;
    this.adminTicketsService.getAllReservedTickets().subscribe((tickets:TicketsUser[])=>{
    this.allReservedTickets=tickets;
    console.log(tickets);});
  }

  getAllUsers(){
    this.allReservedTickets=null;
    this.cancelMessage=null;
    this.resetMessage=null;
    this.ticketMessage=null;
    this.adminTicketsService.getAllUsers(this.accessLevel).subscribe((users:UserForLogin[])=>{
      this.allUsers=users;
      console.log(users);
    });
  }

  cancelTicket(id:number, userId:number){
    this.ticketMessage=null;
    this.resetMessage=null;
    this.adminTicketsService.cancelTicket(id).subscribe((ticket:TicketsUser)=>{
      this.canceledTicket=ticket;
      console.log(ticket);
      this.cancelMessage='Succesfully canceled ticket with id: '+id+'. From user with id: '+userId;
    });
  }

  addTicket(){
    this.cancelMessage=null;
    this.resetMessage=null;
    this.ticketMessage='Added a Ticket';
    this.adminTicketsService.addTicket(this.adminTicket).subscribe((ticket:TicketsUser)=>{
      this.addedTicket=ticket;
      console.log('Created ticket no. '+ticket.ticketId);
    });
  }

}
