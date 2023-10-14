import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
