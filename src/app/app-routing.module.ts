import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
