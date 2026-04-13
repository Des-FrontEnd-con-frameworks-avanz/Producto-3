/**
 * DetalleScreen - Pantalla de detalle de un elemento
 * TODO (Thabata): Implementar vista detalle con imagen zoomeable y datos de Firebase
 *
 * Recibe la prop 'route.params.item' con el objeto seleccionado del listado.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalleScreen = ({ route, navigation }) => {
  // Cuando Kevin pase el item: const { item } = route.params;

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
