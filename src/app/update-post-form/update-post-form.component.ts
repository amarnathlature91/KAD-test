import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../app_services/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.css']
})
export class UpdatePostFormComponent {
  postForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdatePostFormComponent>,
    @Inject(MAT_DIALOG_DATA) public post: any,
    private postservice: PostService,
    private formBuilder: FormBuilder
  ) {
    this.postForm = this.formBuilder.group({
      postId: [this.post.postId],
      jobTitle: [this.post.jobTitle, Validators.required],
      description: [this.post.description, Validators.required],
      location: [this.post.location, Validators.required],
      experience: [this.post.experience, Validators.required],
      salary: [this.post.salary, Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const postData = this.postForm.value;
      this.postservice.updatePost(postData).subscribe(
        () => {
          console.log('Post updated successfully');
        },
        error => {
          console.log('Error updating post');
        }
      );
      this.postForm.reset();
      location.reload();
    }
  }

}

