import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, PopoverController, ActionSheetController } from 'ionic-angular';

import { PresentationPage} from '../presentation/presentation';
import { TarifsPage } from '../tarifs/tarifs';
import { EvenementsSpeciauxPage } from '../evenements-speciaux/evenements-speciaux';
import { PopoverPage } from '../popover/popover';
import { HomePage } from '../home/home';

import {AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [AngularFireAuth]
})
export class TabsPage {

  presentationRoot = PresentationPage;
  tarifsRoot = TarifsPage;
  evenementsSpeciauxRoot = EvenementsSpeciauxPage;


  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, private toast: ToastController,
              private afAuth: AngularFireAuth, public _actionSheetController: ActionSheetController) {}

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
      this.toast.create({
        message: `Bonjour ${data.email}, bienvenue à Immersion`,
        duration: 300,
      }).present();
    }
    else{
      this.toast.create({
        message: 'Impossible de trouver les details d\'identification',
        duration: 300,
      }).present();
    }
    });
  }

  /*showMenu() {
    let menuSheet = this._actionSheetController.create({
      title: 'Choose action',
      buttons: [
        {
          text: 'Logout',
          role: 'add',
          handler: () => {
            menuSheet.dismiss().then(() => {
              this.logout();
            });
          }
        },
        {
          text: 'Evenements Speciaux',
          role: 'add',
          handler: () => {
            menuSheet.dismiss().then(() => {
              this.redirectToEvenementPage();
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    menuSheet.present();
  }*/

  redirectToEvenementPage(){
    this.navCtrl.push(EvenementsSpeciauxPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }

  presentPopover($myEvent) {
  let pop = this.popoverCtrl.create(PopoverPage);
  pop.present({
    ev: $myEvent
  });
  }


}
