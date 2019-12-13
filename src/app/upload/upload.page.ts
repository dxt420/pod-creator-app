import { Component, ViewChild, OnInit } from '@angular/core';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import * as mm from 'music-metadata';
import * as util from 'util';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {


  

  @ViewChild(MultiFileUploadComponent, {static: false}) fileField: MultiFileUploadComponent;

  constructor() {

  }

  ngOnInit() {
  }

  upload(){

    let files = this.fileField.getFiles();
    console.log(files);

    

    let formData = new FormData();
    formData.append('somekey', 'some value') // Add any other data you want to send

    files.forEach((file) => {
           formData.append('files[]', file.rawFile, file.name);
    });

    // POST formData to Server

  }

}
