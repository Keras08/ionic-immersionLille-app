import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PresentPage } from '../present/present';
/**
 * Generated class for the TarifsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "tarif")
@Component({
  selector: 'page-tarif',
  templateUrl: 'tarif.html',
})
export class TarifPage {

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarifsPage');
  }

  openPresent(){
    this.navCtrl.setRoot(PresentPage);
  }

  presentPopover($event) {
  let pop = this.popoverCtrl.create(PopoverPage);

  let ev = {
    target : {
      getBoundingClientRect : () => {
        return {
          top: '500',
          left: '100'
        };
      }
    }
  };
  pop.present({ev:$event});
  }

}
