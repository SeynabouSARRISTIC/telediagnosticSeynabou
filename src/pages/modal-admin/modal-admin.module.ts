import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAdminPage } from './modal-admin';

@NgModule({
  declarations: [
    ModalAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAdminPage),
  ],
})
export class ModalAdminPageModule {}
