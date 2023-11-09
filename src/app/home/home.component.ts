import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryService } from '../app_services/gallery.service';
import { Gallery } from '../entity/gallery';
import { API_BASE_URL } from '../common/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  host: string = API_BASE_URL + '/gallery/';
  galleries: Gallery[] = [];
  constructor(private galleryService: GalleryService) { }

  ue: boolean = true;
  ts: boolean = true;
  pi: boolean = true;
  cp: boolean = true;

  ngOnInit(): void {
    this.loadGallery();
  }

  loadGallery(): void {
    this.subscriptions.push(
      this.galleryService.getAllGallery().subscribe(
        (galleryResponses: Gallery[]) => {
          galleryResponses.forEach(gr => this.galleries.push(gr));
        }
      )
    );
  }
}

