import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-create-pin',
  templateUrl: './create-pin.component.html',
  styleUrls: ['./create-pin.component.css'],
})
export class CreatePinComponent implements OnInit {
  public itemsCollaboratory: any = [];
  public pinData: any = [];
  privacy: string = '';
  selectedFile: File | null = null;
  formData: any = {
    file: null,
    collaboratory: 'rachel',
    privacy: 'Public',
    title: 'pin1',
  };
  constructor() {}

  ngOnInit(): void {
    // this.itemsCollaboratory = localStorage.getItem('customerArr') || []
    let item: any = JSON.parse(localStorage.getItem('customerArr'));
    item.forEach((item) => {
      this.itemsCollaboratory.push(item.name);
    });
    this.privacy = 'Private';
  }
  public uploader: FileUploader = new FileUploader({
    url: '',
    disableMultipart: false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf'],
  });

  public onFileSelected(event: EventEmitter<File[]>) {
    this.selectedFile = event[0]; // event will be an array with the file(s)
    if (this.selectedFile && this.selectedFile.size > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        // Assign the Base64 string of the file to formData
        this.formData.file = reader.result; // Store the Base64 result here
        // Log Base64 string
        console.log('File Base64:', this.formData.file);
      };
      // Add an onerror handler for the FileReader to catch any errors
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  onSubmit(form) {
    let storedArray = JSON.parse(localStorage.getItem('pinArr') || '[]');
    // Create an object to store your form data along with the Base64 file content
    (this.formData.collaboratory = form.value.collaboratory),
      (this.formData.privacy = form.value.privacy),
      (this.formData.title = form.value.title);
    storedArray.push(this.formData);
    localStorage.setItem('pinArr', JSON.stringify(storedArray));
    alert('Pin is created successfully!');
  }
}
