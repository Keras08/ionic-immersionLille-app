import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { PresentationPage} from '../presentation/presentation';
import { TarifsPage } from '../tarifs/tarifs';
import { EvenementsSpeciauxPage } from '../evenements-speciaux/evenements-speciaux';

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


  constructor(public navCtrl: NavController, private toast: ToastController,
              private afAuth: AngularFireAuth) {}

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

  
}
