import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent {

  constructor(public dialog: MatDialog) {}
  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactUsComponent, {
      width: '400px', height: auto
    });
  }

}
