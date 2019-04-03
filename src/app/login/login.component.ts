import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { Tickets } from '../tickets';
import { Login } from '../login';
import { UserForLogin } from '../userForLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ticket: Tickets[];
  users: User[];

  //Credentials needed to login
  loggingInUser: Login = { email: '', password: '', accessLevel: 0 };

  //Credentials returned with AccessLevel and token

  // returnedUser:UserForLogin={userId: 'string',
  //   firstName: 'string',
  //   lastName: 'string',
  //   phoneNumber:'string',
  //   userName: 'string',
  //   password:'string',
  //   email: 'string',
  //   accessLevel:0,
  //   token:0};

  returnedUser: UserForLogin;

  user: UserForLogin = {
    userId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userName: '',
    password: '',
    email: '',
    accessLevel:0,
    token:0
  };

  // user:User=null;

  // email:string;

  constructor(private appComponent: AppComponent, private location: Location, private userService: UserService) { }

  ngOnInit() {
    // this.createUser();
  }

  login() {

    this.userService.login(this.loggingInUser).subscribe((user: UserForLogin) => {

      this.returnedUser = user;

      console.log(this.returnedUser.email);
      console.log('id: '+this.returnedUser.userId);
      if (!(user === null)) {
        console.log('I passed the email: '+this.returnedUser.email);
        this.appComponent.changeEmail(this.returnedUser.email);
        this.appComponent.changeId(this.returnedUser.userId);
        console.log('Access Level: '+this.returnedUser.accessLevel);
        this.appComponent.changeAccessLevel(this.returnedUser.accessLevel);
        this.location.back();
      }
    });

    // console.log(this.returnedUser.email);


  }

  createUser() {

    this.userService.createUser(this.user).subscribe((createdUser: UserForLogin) => {

      this.user = createdUser;

      console.log(createdUser);

    this.appComponent.changeEmail(this.user.email);
    this.appComponent.changeId(this.user.userId); 
    this.appComponent.changeAccessLevel(this.user.accessLevel);  
    console.log('Access Level: '+this.user.accessLevel);
    this.location.back();
    }
    );

   

 


  }

}
