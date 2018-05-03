import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PresentationPage } from '../pages/presentation/presentation';
import { TarifsPage } from '../pages/tarifs/tarifs';
import { EvenementsSpeciauxPage } from '../pages/evenements-speciaux/evenements-speciaux';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { ReserverPage } from '../pages/reserver/reserver';

@NgModule({
  declarations: [
    MyApp,
    PresentationPage,
    TarifsPage,
    EvenementsSpeciauxPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ReserverPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PresentationPage,
    TarifsPage,
    EvenementsSpeciauxPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ReserverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
