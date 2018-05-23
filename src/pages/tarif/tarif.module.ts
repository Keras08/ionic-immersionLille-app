import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarifPage } from './tarif';

@NgModule({
  declarations: [
    TarifPage,
  ],
  imports: [
    IonicPageModule.forChild(TarifPage),
  ],
})
export class TarifPageModule {}
