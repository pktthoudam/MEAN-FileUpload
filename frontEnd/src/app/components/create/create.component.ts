import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form1!: FormGroup;
  imageData!: string;
  selectedFile!: File;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private apiService: ApiServiceService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      avatar: ['']
    })
  }



  // fileChangeEvent(event: any) {
  //   // console.log(event);
  //   // this.selectedFile = event.target.files[0];
  //   // const file:File = event.target.files[0];
  // }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imageChangedEvent = event;
    // this.selectedFile = event.target.files[0];

  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // console.log(this.file);
    console.log(event)
    this.selectedFile = this.dataURLtoFile(this.croppedImage, "myImage");
    console.log(this.selectedFile);
    

  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  dataURLtoFile(dataurl: any, filename: any) {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
      
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      
    return new File([u8arr], filename, { type: mime });
   
  }

  //Usage example:
  // file = this.dataURLtoFile(this.croppedImage,'image')
  


  create() {
    const formData = new FormData()
    formData.append("avatar", this.selectedFile);
    // formData.append("avatar", this.croppedImage);
    formData.append("fname", this.form1.value.fname);
    formData.append("lname", this.form1.value.lname);

    this.apiService.postUser(formData).subscribe({
      next: (value) => {
        console.log(value);
        this.form1.reset();
        alert("Created");
        this.router.navigate(["/list"])


      },
      error: (error) => {
        console.log(error);

      }
    })
  }
}
