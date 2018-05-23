import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenementsPage } from './evenements';

@NgModule({
  declarations: [
    EvenementsPage,
  ],
  imports: [
    IonicPageModule.forChild(EvenementsPage),
  ],
})
export class EvenementsPageModule {}
