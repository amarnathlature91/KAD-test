import { Component } from '@angular/core';
import { instagram, linkedin } from '../common/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

 instagram=instagram;
 linkedIn=linkedin;
  
}

