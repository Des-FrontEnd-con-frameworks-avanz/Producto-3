import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import database from '@react-native-firebase/database';
import { FIREBASE_DB_URL } from '@env'; 

const ListadoScreen = () => {
  const [estado, setEstado] = useState<'cargando' | 'conectado' | 'error'>('cargando');
  const [mensaje, setMensaje] = useState('Iniciando conexión...');

  useEffect(() => {
    try {
      const db = database().app.database(FIREBASE_DB_URL);
      const conectadoRef = db.ref('.info/connected');

      const listener = conectadoRef.on('value', snapshot => {
        if (snapshot.val() === true) {
          setEstado('conectado');
          setMensaje('¡CONEXIÓN EXITOSA! ✅\nBase de Datos Vinculada');
        } else {
          setEstado('error');
          setMensaje('Buscando señal de Firebase... ❌');
        }
      }, (error) => {
        setEstado('error');
        setMensaje('Error de Permisos: ' + error.message);
      });

      return () => conectadoRef.off('value', listener);
    } catch (err) {
      setEstado('error');
      setMensaje('Error de configuración .env: Revisa Babel');
      console.error(err);
    }
  }, []);

  return (
    <View style={[styles.container, estado === 'conectado' ? styles.bgSuccess : styles.bgDefault]}>
      <View style={styles.card}>
        <Text style={styles.label}>FIREBASE MONITOR (.ENV)</Text>
        
        {estado === 'cargando' && <ActivityIndicator size="large" color="#1A237E" />}

        <Text style={[
          styles.statusText, 
          estado === 'conectado' ? styles.textSuccess : styles.textError
        ]}>
          {mensaje}
        </Text>

        <Text style={styles.hint}>
          {estado === 'conectado' 
            ? "URL cargada desde el archivo secreto." 
            : "Asegúrate de haber reiniciado con --reset-cache."}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  bgDefault: { backgroundColor: '#F5F5F5' },
  bgSuccess: { backgroundColor: '#E8F5E9' },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  label: { fontSize: 10, fontWeight: 'bold', color: '#AAA', letterSpacing: 2 },
  statusText: { fontSize: 18, fontWeight: 'bold', marginVertical: 15, textAlign: 'center', lineHeight: 25 },
  textSuccess: { color: '#2E7D32' },
  textError: { color: '#C62828' },
  hint: { fontSize: 12, color: '#888', textAlign: 'center', marginTop: 10 }
});

export default ListadoScreen;