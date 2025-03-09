import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';


const firebaseConfig = {
  apiKey: "AIzaSyBeS_KyRDzrXUiBfIe3LUh9B1H4chUkiW0",
  authDomain: "simple-crm-bc285.firebaseapp.com",
  projectId: "simple-crm-bc285",
  storageBucket: "simple-crm-bc285.firebasestorage.app",
  messagingSenderId: "797637247668",
  appId: "1:797637247668:web:d5c4e8bbed2a1861fa8de1"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideNativeDateAdapter(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    )
  ]
};
