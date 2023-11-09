import { Component } from '@angular/core';
import { Post } from '../entity/post';
import { Subscription } from 'rxjs';
import { PostService } from '../app_services/post.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../app_services/user-auth.service';
import { ApplyJobComponentComponent } from '../apply-job-component/apply-job-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  private subscriptions: Subscription[] = [];
  posts: Post[] = [];
  resultPage: number = 1;
  resultSize: number = 10;


  constructor(
    private postService: PostService,
    private router: Router,
    private userAuthService: UserAuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadposts();
  }

  loadposts(): void {
    this.subscriptions.push(
      this.postService.getPosts(this.resultPage, this.resultSize).subscribe(
        (postResponses: Post[]) => {
          postResponses.forEach(pr => this.posts.push(pr));
        }
      )
    );
  }

  isLoggedin(): boolean {
    return this.userAuthService.isLoggedIn();
  }

  logout(): void {
    this.userAuthService.logout();
  }

  openApply(jobTitle: string|any): void {
    const dialogRef = this.dialog.open(ApplyJobComponentComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        jobTitle: jobTitle,
      }
    });
  }
}
