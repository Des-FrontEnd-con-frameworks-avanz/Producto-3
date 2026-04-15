/**
 * App.tsx - Punto de entrada principal de la aplicación
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
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import '@react-native-firebase/app';

import ListadoScreen from './src/screens/ListadoScreen';
import DetalleScreen from './src/screens/DetalleScreen';
import MultimediaScreen from './src/screens/MultimediaScreen';
import type { Player } from './src/types/Player';

// Tipo compartido con las pantallas para tipar la navegación
export type RootStackParamList = {
  Listado: undefined;
  Detalle: { player: Player };
  Multimedia: { player: Player };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const COLORS = {
  headerBackground: '#1A237E',
  headerText: '#FFFFFF',
  headerTint: '#FFFFFF',
};

interface HomeButtonProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const HomeButton: React.FC<HomeButtonProps> = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Listado')}
    style={styles.homeButton}
    accessibilityLabel="Ir al inicio"
  >
    <Text style={styles.homeButtonText}>🏠 Inicio</Text>
  </TouchableOpacity>
);

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Listado"
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: COLORS.headerBackground },
          headerTitleStyle: {
            color: COLORS.headerText,
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTintColor: COLORS.headerTint,
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
