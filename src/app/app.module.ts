import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from "./app.firebase.config";

import { ReserverPage } from '../pages/reserver/reserver';
import { PopoverPage } from '../pages/popover/popover';
import { PresentPage } from '../pages/present/present';
import { EvenementsPage } from '../pages/evenements/evenements';
import { TarifPage } from '../pages/tarif/tarif';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { PresentationPage } from '../pages/presentation/presentation';
import { TarifsPage } from '../pages/tarifs/tarifs';
import { EvenementsSpeciauxPage } from '../pages/evenements-speciaux/evenements-speciaux';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    PresentationPage,
    TarifsPage,
    EvenementsSpeciauxPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ReserverPage,
    PopoverPage,
    PresentPage,
    EvenementsPage,
    TarifPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    HttpModule,
    HttpClientModule,
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
    ReserverPage,
    PopoverPage,
    PresentPage,
    EvenementsPage,
    TarifPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
