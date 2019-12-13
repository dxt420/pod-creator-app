
import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss']
})
export class MultiFileUploadComponent implements OnInit {

  public uploader: FileUploader; 
  public hasBaseDropZoneOver: boolean = false;

  constructor() { 
   

  }

  ngOnInit() {
    this.uploader = new FileUploader({});
  this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
  this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
}

onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  let data = JSON.parse(response); //success server response
  console.log(data);
}

onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  let error = JSON.parse(response); //error server response
  console.log(error);
}
  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }


  // getTags(){
    
  // }

  // reorderFiles(reorderEvent: CustomEvent): void {
  //   let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
  //   this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
  // }


  
}