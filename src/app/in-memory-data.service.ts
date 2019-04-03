import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tickets= [
        {
            ticketId: 1,
            eventName: "Scorpions_live",
            eventTime: "10th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 2,
            eventName: "Scorpions_live",
            eventTime: "10th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 3,
            eventName: "Arctic Monkeys",
            eventTime: "15th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 4,
            eventName: "Arctic Monkeys",
            eventTime: "15th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 5,
            eventName: "Arctic Monkeys",
            eventTime: "15th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 6,
            eventName: "Scorpions_live",
            eventTime: "10th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 7,
            eventName: "Scorpions_live",
            eventTime: "10th of july",
            price: 50,
            isReserved: 1
        },
        {
            ticketId: 8,
            eventName: "Scorpions_live",
            eventTime: "10th of july",
            price: 50,
            isReserved: 1
        }
    ];
    return {tickets};
  }
}