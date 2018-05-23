import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { TarifsPage } from '../tarifs/tarifs'
/**
 * Generated class for the PresentationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "main", segment: "app" )
@Component({
  selector: 'page-presentation',
  templateUrl: 'presentation.html',
})
export class PresentationPage {

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }

  openTarif(){
    this.navCtrl.setRoot(TarifsPage);
  }

  presentPopover() {
  let pop = this.popoverCtrl.create(PopoverPage);

  let ev = {
    target : {
      getBoundingClientRect : () => {
        return {
          top: '700',
          left: '100'
        };
      }
    }
  };
  pop.present({ev});
  }
}
