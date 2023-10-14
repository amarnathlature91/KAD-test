import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from "@syncfusion/ej2-angular-navigations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientsComponent,
    ServicesComponent,
    CareersComponent,
    ContactsComponent,
    ChatButtonComponent,
    FooterComponent,
    ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
