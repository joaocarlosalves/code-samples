import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadRouterModule } from './upload-router';
import { UploadComponent } from './upload.component';


@NgModule({
  declarations: [UploadComponent],
  imports: [CommonModule, FormsModule, ToastModule, FileUploadModule, UploadRouterModule],
  providers: [MessageService]
})
export class PUploadModule {}
