import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PresentPage } from '../present/present';
import { User } from "../../models/user";
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireAuth],
})
export class HomePage {

    public items : Array<any> = [];
    user = {} as User;

    resposeData : any;
    userData = {"email":"", "password":""};

    constructor(private afAuth: AngularFireAuth,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public navCtrl: NavController,
                public navParams: NavParams,
                public authServiceProvider: AuthServiceProvider) {



    }



    openTabs(){
      //this.navCtrl.push(PresentPage);
      this.navCtrl.push(PresentPage);
    }

/*    async login(user: User) {

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
            //this.navCtrl.setRoot(PresentPage);
            this.navCtrl.push(TabsPage);
          }
          else{
            alert('Veuillez vous identifier');
          }
      }).then(_=>{
          loader.dismiss();
      })


    }*/

    register() {
      this.navCtrl.push(RegisterPage);
    }

    login() {

      this.authServiceProvider.postData(this.userData, "login").then((result) =>{
        this.resposeData = result;
        console.log(this.resposeData);
        localStorage.setItem('userData', JSON.stringify(this.resposeData) );
        this.navCtrl.push(HomePage);
      }, (err) => {
        //Connexion failed
        console.log(err);
      });
    }



}
