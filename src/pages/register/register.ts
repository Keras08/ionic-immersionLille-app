import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]
})
export class RegisterPage {

  /*user = {} as User;
  public items : Array<any> = [];*/
  confpassword : any;
  resposeData : any;
  userData = {"pseudo":"", "password":"", "email":"", "tel":"", "dateN":"", "confirmPassword":""};

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController,
              public navParams: NavParams, public authServiceProvider : AuthServiceProvider) {
  }

  signup() {
    if(this.userData.confirmPassword != this.userData.password)
    {
      console.log("Votre mot de passe et sa confirmation doivent être identique !");
    }
    else {
      console.log("Votre mot de passe et sa confirmation sont identique !");
    this.authServiceProvider.postData(this.userData, "index.php").then((result) =>{
      this.resposeData = result;
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      //Connexion failed
      console.log(err);
    });
    }
  }

  

  /*ionViewDidLoad() : void
  {
    this.load()
  }*/

  /*load() : void {
    this.http
      .get('http://www.localhost/retrieve-data.php')
      .subscribe((data: any) =>
      {
          console.dir(data);
          this.items = data;
      },
      (error : array) =>
      {
          console.dir(error);
      });
  }*/

/*  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,
      user.password);
      console.log(result);
      this.navCtrl.push(HomePage);
    }
    catch(e){
      console.error(e);
    }
  }*/

}
