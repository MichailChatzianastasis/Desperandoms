import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


 sum:number=this.appComponent.sum;

  

  constructor(private appComponent:AppComponent) { }


  ngOnInit() { 
  }

  emptySum(){
    this.sum=0;
  }

}
