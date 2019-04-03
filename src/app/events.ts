import { Ticket } from "./ticket";

export class Event {
    eventId: number;
    name: string;
    description: string;
    address: string;
    tickets: Ticket[];
}