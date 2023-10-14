import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';
import { photos } from '../common/constants';

@Component({
  selector: 'app-about',
  standalone: true,
	imports: [NgbCarouselModule, NgIf ,NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bgurl:string='src\assets\images\aboutpage\carouselBg.jpg';
  photos=photos;
  
}
