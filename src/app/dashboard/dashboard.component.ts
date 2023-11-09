import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../app_services/user-auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../entity/post';
import { PostService } from '../app_services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdatePostFormComponent } from '../update-post-form/update-post-form.component';
import { GalleryService } from '../app_services/gallery.service';
import { Gallery } from '../entity/gallery';
import { API_BASE_URL } from '../common/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  deleting: boolean = false;


  imageForm: FormGroup;
  photo!: File
  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null
  galleries: Gallery[] = [];
  host: string = API_BASE_URL + '/gallery/';
  addMorePhotos: boolean = false;

  postForm: FormGroup;
  private subscriptions: Subscription[] = [];
  posts: Post[] = [];

  resultPage: number = 1;
  resultSize: number = 10;
  constructor(
    private galleryService: GalleryService,
    private authService: UserAuthService,
    private router: Router,
    private postService: PostService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.postForm = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      experience: ['', Validators.required],
      salary: ['', Validators.required]
    }),
      this.imageForm = this.formBuilder.group({
        postPhoto: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadGallery();
  }

  isLoggedin(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }


  loadPosts() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    } else {
      this.subscriptions.push(
        this.postService.getPosts(this.resultPage, this.resultSize).subscribe(
          (postResponses: Post[]) => {
            postResponses.forEach(pr => this.posts.push(pr));
          }
        )
      );
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      const postData = this.postForm.value;
      this.postService.createNewPost(postData).subscribe(
        (response: any) => {
          this.loadPosts();
        }
      );
      this.postForm.reset();
      location.reload();
    }
  }

  openDeleteConfirmation(postId: number | any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: {
        title: 'Delete Confirmation',
        message: 'Are you sure you want to delete this post?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePost(postId);
      }
    });
  }

  openUpdatePost(post: Post): void {
    const dialogRef = this.dialog.open(UpdatePostFormComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        postId: post.postId,
        jobTitle: post.jobTitle,
        description: post.description,
        location: post.location,
        experience: post.experience,
        salary: post.salary
      }
    });
  }

  deletePost(postId: number | any) {
    this.deleting = true;
    this.postService.deletePost(postId).subscribe(
      (response: any) => {
        this.deleting = false;
        location.reload();
      }
    );
  }



  onFileChange(event: any): void {
    this.photo = event.target.files[0];
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  loadGallery(): void {
    this.subscriptions.push(
      this.galleryService.getAllGallery().subscribe(
        (galleryResponses: Gallery[]) => {
          galleryResponses.forEach(gr => this.galleries.push(gr));
          if (galleryResponses.length < 4) {
            this.addMorePhotos = true;
          }
        }
      )
    );
  }

  submitImage() {
    const formData = new FormData();
    formData.append('postPhoto', this.photo);
    this.galleryService.addImage(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
    location.reload();
  }


  openDeleteImage(imageId: number | any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: {
        title: 'Delete Confirmation',
        message: 'Are you sure you want to delete this Image?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteImage(imageId);
      }
    });
  }

  deleteImage(imageId: number | any): void {
    this.galleryService.deleteImage(imageId).subscribe(
      (response: any) => {
      }

    );
    location.reload();
  }

}
