/**
 * DetalleScreen - Pantalla de detalle de un jugador
 * TODO (Thabata): Implementar vista detalle con imagen zoomeable y datos de Firebase
 *
 * Recibe route.params.player con el objeto Player seleccionado del listado.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Detalle'>;

const DetalleScreen: React.FC<Props> = ({ route }) => {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Detalle</Text>
      <Text style={styles.subtitle}>
        [Thabata] Aquí va el detalle con imagen zoomeable y datos de Firebase
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default DetalleScreen;
