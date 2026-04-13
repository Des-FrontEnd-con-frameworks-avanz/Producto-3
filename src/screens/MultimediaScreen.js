/**
 * MultimediaScreen - Pantalla de reproductor multimedia
 * TODO (Mar): Implementar reproductor de video/audio con mínimo 4 botones de interacción
 *
 * Recibe la prop 'route.params.item' con el objeto seleccionado (incluye URL multimedia).
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MultimediaScreen = ({ route, navigation }) => {
  // Cuando Kevin/Thabata pasen el item: const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Multimedia</Text>
      <Text style={styles.subtitle}>
        [Mar] Aquí va el reproductor multimedia con 4+ botones de interacción
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

export default MultimediaScreen;
