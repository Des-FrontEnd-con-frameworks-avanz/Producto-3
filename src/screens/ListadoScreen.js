/**
 * ListadoScreen - Pantalla de inicio con lista de datos desde Firebase
 * TODO (Kevin): Implementar FlatList con datos de Firestore
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListadoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Listado</Text>
      <Text style={styles.subtitle}>
        [Kevin] Aquí va el FlatList con datos de Firebase
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

export default ListadoScreen;
