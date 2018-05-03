import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from "../../models/user";
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireAuth]
})
export class HomePage {


    user = {} as User;

    constructor(private afAuth: AngularFireAuth,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public navCtrl: NavController,
                public navParams: NavParams) {



    }

/*   onSubmit(f: NgForm){
      console.log(f.value);
      console.log(f.valid);
      if(f.valid)
        this.navCtrl.push(TabsPage);
      else
        alert("Vous devez saisir les champs pour vous enregistrer");
    }

    onConnect(ff: NgForm){
      console.log(ff.value);
      console.log(ff.valid);
      if(ff.valid)
        this.navCtrl.push(TabsPage);
      else
        alert("Vous devez saisir les champs pour vous connecter");
    } */

    openTabs(){
      this.navCtrl.push(TabsPage);
    }

    async login(user: User) {

      let loader = this.loadingCtrl.create({
        content: "",
      });
      let bool = 1;
      loader.present().then(_=>{
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).catch( (error) => {
            console.log(error);
            bool = 0;
            this.navCtrl.setRoot(HomePage);
            alert('Votre mot de passe et/ou votre email est invalide');
          });
          console.log(bool);
          if(bool === 1)
          {
            this.navCtrl.push(TabsPage);
          }
          else{
            alert('Veuillez vous identifier');
          }
      }).then(_=>{
          loader.dismiss();
      })


    }

    register() {
      this.navCtrl.push(RegisterPage);
    }
}
