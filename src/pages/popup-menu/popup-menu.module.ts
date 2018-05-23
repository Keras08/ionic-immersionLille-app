import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupMenuPage } from './popup-menu';

@NgModule({
  declarations: [
    PopupMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupMenuPage),
  ],
})
export class PopupMenuPageModule {}
