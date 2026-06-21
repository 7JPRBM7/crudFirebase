import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// ferramenta HTTP para liberar o consumo da API REST
import { provideHttpClient } from '@angular/common/http';

// ferramentas base do Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD23O0IVKeFBMaCHo2KM_NSx7j731gGVlI",
  authDomain: "crudflashcard.firebaseapp.com",
  projectId: "crudflashcard",
  storageBucket: "crudflashcard.firebasestorage.app",
  messagingSenderId: "875486458594",
  appId: "1:875486458594:web:9b69f8fd02997e12a724bb",
  measurementId: "G-S4YHBB3BM6"
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    
    // provedor HTTP para o aplicativo inteiro
    provideHttpClient(),
    
    // inicia a conexão global com o Firebase e o Banco de Dados
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
});