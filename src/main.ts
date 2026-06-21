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
  apiKey: "COLE_AQUI_DEPOIS",
  authDomain: "COLE_AQUI_DEPOIS",
  projectId: "COLE_AQUI_DEPOIS",
  storageBucket: "COLE_AQUI_DEPOIS",
  messagingSenderId: "COLE_AQUI_DEPOIS",
  appId: "COLE_AQUI_DEPOIS"
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