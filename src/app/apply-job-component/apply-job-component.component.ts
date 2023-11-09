import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../app_services/post.service';

@Component({
  selector: 'app-apply-job-component',
  templateUrl: './apply-job-component.component.html',
  styleUrls: ['./apply-job-component.component.css']
})
export class ApplyJobComponentComponent {

  constructor(
    public dialogRef: MatDialogRef<ApplyJobComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public post: any,
    private postservice: PostService,
  ) {
  }
  selectedFile: File | null = null
  description!: string;
  skills!: string;
  experience!: string;
  fullName!: string;


  isSending: boolean = false;
  previewUrl: string | ArrayBuffer | null = null;
  photo!: File


  onFileSelected(event: any): void {
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

  onSubmit() {
    const formData = new FormData();
    formData.append('jobTitle', this.post.jobTitle);
    formData.append('file', this.photo);
    formData.append('description', this.description)
    formData.append('skills', this.skills);
    formData.append('experience', this.experience);
    formData.append('fullName', this.fullName);

    this.isSending = true;
    this.postservice.applyJob(formData).subscribe(
      (response) => {
        console.log("success");
        this.isSending = false;
        location.reload();
      },
      (error) => {
        console.log("Error");
        location.reload();
      }
    );
  }
}
