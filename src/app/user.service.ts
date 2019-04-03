import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from '../../node_modules/rxjs';
import { Tickets } from './tickets';
import { catchError } from '../../node_modules/rxjs/operators';
import { LoginComponent } from './login/login.component';
import { error } from 'util';
import { Login } from './login';
import { UserForLogin } from './userForLogin';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private jsonString: string;

  private userUrl = 'http://localhost:8080/webapp/users';
  private userToLoginUrl = 'http://localhost:8080/webapp/users/login';

  // private userUrl='http://localhost:8080/webapp/tickets';

  constructor(private http: HttpClient) { }


  createUser(user: User): Observable<User> {
    console.log('creating user with Username ' + user.userName);
    return this.http.post<User>(this.userUrl, user, httpOptions);


    // return this.http.post<User>(this.userUrl,user,httpOptions);
    // console.log('must not be returned');
  }

  login(user:Login): Observable<UserForLogin>{
    console.log('Trying to login with email: ' + user.email);
        return this.http.post<UserForLogin>(this.userToLoginUrl,user,httpOptions);
  }

  // ,user,httpOptions
  // {userId:user.userId,userName:user.userName,firstName:user.firstName,lastName:user.lastName,phoneNumber:user.phoneNumber,password:user.password,email:user.email},httpOptions
}
