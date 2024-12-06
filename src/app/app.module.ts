import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { StylesModule } from './shared/styles/styles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FooterComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    StylesModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"miscellaneous-fts","appId":"1:852596679231:web:e4134574b3df77e3de4e8a","storageBucket":"miscellaneous-fts.firebasestorage.app","apiKey":"AIzaSyAAUld5xRhWEU4rt-kw1HPEwJfDFm_-_J8","authDomain":"miscellaneous-fts.firebaseapp.com","messagingSenderId":"852596679231","measurementId":"G-HDKZYR3KMM"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
