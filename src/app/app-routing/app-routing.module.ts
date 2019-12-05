import { NgModule } from '@angular/core';
import { RouterModule, Routes, ChildActivationEnd } from '@angular/router';
import { AppComponent } from '../app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent} from "../navbar/navbar.component";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EventregistrationComponent } from '../eventregistration/eventregistration.component';
import { CreateventComponent} from '../createvent/createvent.component'
import { EventoComponent } from '../frontpage/evento/evento.component';
import { RegisterComponent } from '../frontpage/register/register.component';
import { LoginComponent } from '../frontpage/login/login.component';


const routes: Routes = [
  {
    path: '', 
    component: AppComponent,
    pathMatch: 'full'
  },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar',  component: NavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventregistration', component: EventregistrationComponent },
  { path: 'createvent',component: CreateventComponent },
  { path: 'evento',  component: EventoComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
