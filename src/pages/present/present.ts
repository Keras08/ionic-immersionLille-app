import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { TarifPage } from '../tarif/tarif';
/**
 * Generated class for the PresentationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "present")
@Component({
  selector: 'page-present',
  templateUrl: 'present.html',
})
export class PresentPage {

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }

  openTarif(){
    this.navCtrl.setRoot(TarifPage);
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
