import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router' 

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
 
})
export class EventoComponent implements OnInit {
  sectionScroll: any;

  constructor( private _router:Router ) { }

  login(){
    this._router.navigate(['/login']);
  }
  register(){
    this._router.navigate(['/register']);
  }
 
  ngOnInit() {
   
   
  }
}
