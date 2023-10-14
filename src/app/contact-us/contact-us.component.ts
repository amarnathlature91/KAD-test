import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContatcServiceService } from '../contatc-service.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  successMessage: string = '';
  sending: boolean = false;
  constructor(private contactService: ContatcServiceService) { }

  Submit(ContactForm: NgForm) {
    this.sending = true;
    this.contactService.sendMessage(ContactForm).subscribe(
      (response) => {
        this.successMessage = response;
      },
      (error) => {
        console.error('POST request failed:', error);
      },
      () => {
        this.sending = false;
      }
    );

    setTimeout(() => {
      window.location.reload();
    }, 6000);

  }
}
