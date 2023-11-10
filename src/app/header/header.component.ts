import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSmallScreen: boolean = false;
  isScrolled = false;
  isCollapsed = true;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Define your breakpoint here
  }


  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
