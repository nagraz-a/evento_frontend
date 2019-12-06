import { Venue} from './Venue';
import { User } from './user';
// import { User } from './user.model';

export class Event {
    
    course:string;
    branch:string;
    year:string;
    register_date:Date;
    amount_paid:DoubleRange;
    shortlist_status:string;
    comments:string;
    ticket_id:string;
    registration_type:string;
    
    
    id:string;
    title: string;
    event_category: string;
    organizer_name: string;
    day: Date;
    end_date: Date;
    summary:string;
    text:string;
    ticket_type: string;
    number_of_tickets: string;
    ticket_price:string;
    register_start_Date: Date;
    register_end_date: Date;
    published: string;
    coordinates: number|undefined;
    owner: User = new User(); 
    tags: Array<string>;
    venue:  Venue = new Venue();
}
      
    
  
  
             
  
  