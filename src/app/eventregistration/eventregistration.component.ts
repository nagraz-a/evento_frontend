import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Event } from '../event';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit {

  posts: Event;
  event: Event = new Event();
  submitted = false;
  
  constructor(private userService: UserService, private router: Router){ }
  ngOnInit() {
  }
  

  save() {
    this.userService.postEvent(this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


  

}
