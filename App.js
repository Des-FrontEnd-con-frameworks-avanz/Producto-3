/**
 * App.js - Punto de entrada principal de la aplicación
 *
 * Responsable de:
 * 1. Inicializar Firebase (@react-native-firebase/app)
 * 2. Configurar el Stack de navegación con 3 pantallas
 * 3. Definir el estilo global del header (colores, botón Home)
 *
 * Autor: Pol (Producto 3 - FP067)
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Navegación
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas (los compañeros sustituirán el contenido de estos archivos)
import ListadoScreen from './src/screens/ListadoScreen';
import DetalleScreen from './src/screens/DetalleScreen';
import MultimediaScreen from './src/screens/MultimediaScreen';

// Firebase (@react-native-firebase/app se inicializa automáticamente
// a través de google-services.json en Android y GoogleService-Info.plist en iOS)
import '@react-native-firebase/app';

const Stack = createNativeStackNavigator();

// Colores globales de la app
const COLORS = {
  headerBackground: '#1A237E', // Azul oscuro
  headerText: '#FFFFFF',       // Blanco
  headerTint: '#FFFFFF',       // Color del botón de vuelta atrás
};

/**
 * Botón "Home" que aparece en la parte derecha del header.
 * Al pulsarlo, navega siempre a la pantalla ListadoScreen (inicio).
 */
const HomeButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Listado')}
    style={styles.homeButton}
    accessibilityLabel="Ir al inicio"
  >
    <Text style={styles.homeButtonText}>🏠 Inicio</Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Listado"
        screenOptions={({ navigation }) => ({
          // --- Estilo del header ---
          headerStyle: {
            backgroundColor: COLORS.headerBackground,
          },
          headerTitleStyle: {
            color: COLORS.headerText,
            fontWeight: 'bold',
            fontSize: 18,
          },
          // Color del botón de vuelta atrás e iconos del header
          headerTintColor: COLORS.headerTint,

          // --- Botón Home en la esquina derecha ---
          headerRight: () => <HomeButton navigation={navigation} />,
        })}
      >
        {/* Pantalla 1: Listado (pantalla inicial) - Kevin */}
        <Stack.Screen
          name="Listado"
          component={ListadoScreen}
          options={{ title: 'Inicio' }}
        />

        {/* Pantalla 2: Detalle - Thabata */}
        <Stack.Screen
          name="Detalle"
          component={DetalleScreen}
          options={{ title: 'Detalle' }}
        />

        {/* Pantalla 3: Multimedia - Mar */}
        <Stack.Screen
          name="Multimedia"
          component={MultimediaScreen}
          options={{ title: 'Multimedia' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
