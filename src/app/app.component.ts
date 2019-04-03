import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ticket Monster';


  sum:number=0;
  email: string=null;
  userId: string=null;
  accessLevel:number=null;


  changeEmail(email:string){
    this.email=email;
  }

  changeId(id:string){
    this.userId=id;
  }

  changeAccessLevel(accessLevel:number){
    this.accessLevel=accessLevel;
  }

  logOut(){
    this.email=null;
    this.userId=null;
  }

}
