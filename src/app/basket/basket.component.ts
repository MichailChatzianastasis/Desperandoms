import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TicketsService } from '../tickets.service';
import { Tickets } from '../tickets';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  purchasedBasket: boolean = false;
  sum: number = 0;
  i: number;
  checkoutPrice: number;
  message: string = null;
  ticketCanceled: boolean = false;
  userId: string = this.appComponent.userId;
  basketTickets: Tickets[];

  constructor(private ticketsService: TicketsService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.updateBasketTickets();
  }



  updateBasketTickets() {

    this.ticketsService.showBasket(this.userId).subscribe((tickets: Tickets[]) => {
      this.basketTickets = tickets;
      console.log(this.basketTickets);

      var sum: number = 0;

      for (this.i = 0; this.i < tickets.length; this.i++) {
        sum = sum + tickets[this.i].price;
        // console.log('The price of the first reserved ticket is '+tickets[this.i].price);
      }
      this.sum = sum;
      this.appComponent.sum = sum;
      console.log('You will pay: ' + this.sum + ' Euros');



    });
  }

  cancelTicket(ticketId: number) {
    this.ticketsService.cancelTicket(this.userId, ticketId).subscribe((hasBeenCanceled: boolean) => {
      this.ticketCanceled = hasBeenCanceled;
      if (hasBeenCanceled) {
        this.message = 'Successfully canceled a Ticket';
        // this.basketTickets[ticketId - 1].isReserved = 0;
        // this.updateBasketTickets;
        this.ticketsService.showBasket(this.userId).subscribe((tickets: Tickets[]) => {
          this.basketTickets = tickets;
          console.log(this.basketTickets);

          var sum: number = 0;

          for (this.i = 0; this.i < tickets.length; this.i++) {
            sum = sum + tickets[this.i].price;
            // console.log('The price of the first reserved ticket is '+tickets[this.i].price);
          }
          this.sum = sum;
          this.appComponent.sum = sum;
          console.log('You will pay: ' + this.sum + ' Euros');
        });
      }
    });
  }

  calculateCheckoutBill() {
    var sum: number = 0;

    for (this.i = 0; this.i < this.basketTickets.length; this.i++) {
      sum = sum + this.basketTickets[this.i].price;
      // console.log('The price of the first reserved ticket is '+tickets[this.i].price);
    }
    this.sum = sum;
    this.appComponent.sum = sum;
    console.log('You will pay: ' + this.sum + ' Euros');
  }


  purchaseBasket() {
    this.ticketsService.purchaseBasket(this.userId).subscribe((purchased: boolean) => {
      this.purchasedBasket = purchased;
      if(purchased){
        console.log('Successfully bought Tickets');
      }
    });
  }


}
