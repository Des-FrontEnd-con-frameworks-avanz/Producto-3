# Producto 3 - Interfaz Móvil (React Native)

**Asignatura:** FP.451 - Desarrollo front-end con frameworks avanzados en entornos móviles  
**Grupo:** NoobDevs  

---

## Estructura del proyecto

```
├── App.js                          # Punto de entrada: Firebase + Navegación (Pol)
├── src/
│   ├── config/
│   │   └── firebase.js             # Configuración Firebase
│   └── screens/
│       ├── ListadoScreen.js        # Pantalla listado con FlatList (Kevin)
│       ├── DetalleScreen.js        # Pantalla detalle con zoom (Thabata)
│       └── MultimediaScreen.js     # Pantalla reproductor multimedia (Mar)
└── package.json
```

---

## Comandos de instalación

### 1. Inicializar proyecto React Native (solo la primera vez)
```bash
npx @react-native-community/cli init Producto3 --pm npm
cd Producto3
```

### 2. Instalar React Native Firebase
```bash
# Módulo principal (obligatorio)
npm install @react-native-firebase/app

# Módulo Firestore (para la base de datos)
npm install @react-native-firebase/firestore

# Android: añadir en android/build.gradle (dentro de buildscript > dependencies):
#   classpath 'com.google.gms:google-services:4.4.2'
# Android: añadir al final de android/app/build.gradle:
#   apply plugin: 'com.google.gms.google-services'
# Descargar google-services.json desde la consola Firebase y colocarlo en android/app/
```

### 3. Instalar React Navigation y dependencias
```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# iOS (solo en Mac):
cd ios && pod install && cd ..
```

### 4. Ejecutar la app
```bash
# Android
npm run android

# iOS (solo en Mac)
npm run ios
```

---

## Configuración de Firebase

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Añadir una app Android (package name: `com.producto3`)
3. Descargar `google-services.json` y colocarlo en `android/app/`
4. Para iOS: descargar `GoogleService-Info.plist` y añadirlo al proyecto Xcode

---

## División de tareas

| Integrante | Tarea |
|-----------|-------|
| **Pol** | Estructura base, Firebase, Navegación (este archivo) |
| **Kevin** | `ListadoScreen.js` - FlatList con datos de Firebase + Entrega |
| **Thabata** | `DetalleScreen.js` - Vista detalle con imagen zoomeable |
| **Mar** | `MultimediaScreen.js` - Reproductor multimedia con 4+ botones |
| **Pol** | Trello Producto 3 + Documentación navegación |

---

## Navegación entre pantallas

Para navegar desde cualquier pantalla, usar:

```js
// Ir al detalle pasando el item seleccionado
navigation.navigate('Detalle', { item: itemSeleccionado });

// Ir a multimedia
navigation.navigate('Multimedia', { item: itemSeleccionado });

// Volver atrás
navigation.goBack();

// Ir al inicio (listado)
navigation.navigate('Listado');
```
