import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvenementsSpeciauxPage } from '../evenements-speciaux/evenements-speciaux'
/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
  template:`
  <ion-content>
  <ion-list no-padding no-margin>
    <button ion-button (click)="openEvenement()"><ion-icon name="color-wand"></ion-icon><p>&nbsp; Evenements speciaux</p></button>
  </ion-list>
  </ion-content>
    `
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }


  openEvenement(){
    this.navCtrl.push(EvenementsSpeciauxPage);
  }


}
