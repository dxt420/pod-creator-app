import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadPage } from './upload.page';
import { FileUploadModule } from 'ng2-file-upload';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadPage,MultiFileUploadComponent]
})
export class UploadPageModule {}
