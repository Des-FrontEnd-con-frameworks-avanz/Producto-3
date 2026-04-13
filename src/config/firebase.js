/**
 * Configuración de Firebase
 * IMPORTANTE: Sustituir los valores de ejemplo por los reales del proyecto Firebase.
 * Los encontrarás en: Consola Firebase > Configuración del proyecto > Tu aplicación
 */

// Con @react-native-firebase/app NO se usa initializeApp() manualmente.
// La configuración se hace en los archivos nativos:
//   Android: android/app/google-services.json
//   iOS:     ios/GoogleService-Info.plist
//
// Este archivo solo exporta la instancia de firebase para usarla en la app.

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// Verificar que Firebase se ha inicializado correctamente
if (!firebase.apps.length) {
  console.warn('Firebase no está inicializado. Asegúrate de haber añadido google-services.json (Android) y/o GoogleService-Info.plist (iOS).');
}

export { firebase, firestore };

/**
 * CREDENCIALES DE EJEMPLO (solo para referencia - no se usan con @react-native-firebase):
 *
 * const firebaseConfig = {
 *   apiKey: "TU_API_KEY",
 *   authDomain: "tu-proyecto.firebaseapp.com",
 *   projectId: "tu-proyecto-id",
 *   storageBucket: "tu-proyecto.appspot.com",
 *   messagingSenderId: "123456789",
 *   appId: "1:123456789:web:abcdef123456",
 * };
 */
