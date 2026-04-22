/**
 * DetalleScreen - Pantalla de detalle de un jugador
 * TODO (Thabata): Implementar vista detalle con imagen zoomeable y datos de Firebase
 *
 * Recibe route.params.player con el objeto Player seleccionado del listado.
 */

import React, { useState } from 'react'; // useState sirve para manejar "estados" (ej. el modal abierto/cerrado)
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Detalle'>;
 
const DetalleScreen: React.FC<Props> = ({ route, navigation }) => {
  const { player } = route.params;
  const [verZoom, setVerZoom] = useState(false);

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        {/* IMAGEN CLICKEABLE */}
        <TouchableOpacity onPress={() => setVerZoom(true)}>
          <Image 
          source={{ uri: player.fotoUrl }} 
          style={styles.imagenDetalle} />
          <Text style={styles.textoAyuda}>Toca la imagen para ampliar</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Nombre: </Text>
            <Text style={styles.subtitle}>{player.nombre} {player.apellidos}</Text>
          </Text>

          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Posición: </Text>
            <Text style={styles.subtitle}>{player.posicion}</Text>
          </Text>

          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Edad: </Text>
            <Text style={styles.subtitle}>{player.edad}</Text>
          </Text>

          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Altura: </Text>
            <Text style={styles.subtitle}>{player.altura}</Text>
          </Text>

          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Peso: </Text>
            <Text style={styles.subtitle}>{player.peso}</Text>
          </Text> 

          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Experiencia: </Text>
            <Text style={styles.subtitle}>{player.experiencia}</Text>
          </Text>

          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Precio: </Text>
            <Text style={styles.subtitle}>{player.precio} €</Text>
          </Text>
  
          <Text style={styles.filaTexto}>
            <Text style={styles.etiqueta}>Descripción: </Text>
            <Text style={styles.textoDescripcion}>{player.descripcion}</Text>
          </Text>
       
        </View>
          {/* BOTÓN SIMPLIFICADO: Quitamos el View innecesario */}
          <TouchableOpacity 
            style={styles.botonMultimedia} 
            onPress={() => navigation.navigate('Multimedia', { player })}>
            <Text style={styles.textoBoton}>Ver Mejores Jugadas</Text>
          </TouchableOpacity>

      </ScrollView>

      {/* MODAL PARA IMAGEN ZOOM */}
      <Modal visible={verZoom} transparent={false}>
        <View style={styles.modelFull}>
          <TouchableOpacity style={styles.botonCerrar} onPress={() => setVerZoom(false)}>
            <Text style={styles.textoBoton}>Cerrar</Text>
          </TouchableOpacity>
          <Image
          source={{uri: player.fotoUrl}}
          style={styles.imagenZoom}
          resizeMode="contain"
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  imagenDetalle: {
    width: '100%',
    height: 300, 
    backgroundColor: '#EEE',
  },
  textoAyuda: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginVertical: 10,
    fontStyle: 'italic',
  },
  infoBox: {
    padding: 20, 
  },
  filaTexto: {
    flexDirection: 'row', 
    marginBottom: 12,      
    borderBottomWidth: 1,  
    borderBottomColor: '#F0F0F0',
    paddingBottom: 8,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A237E', 
    width: 110,       
  },
  subtitle: {
    fontSize: 16,
    color: '#444',    
    flex: 1,          
  },
  modelFull: { 
    flex: 1, 
    backgroundColor: 'black', 
    justifyContent: 'center',
    alignItems: 'center' 
  },
  imagenZoom: { 
    width: '100%', 
    height: '90%' 
  },
  botonCerrar: { 
    position: 'absolute', 
    top: 50, 
    right: 25, 
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.2)', 
    padding: 10,
    borderRadius: 20
  },
  textoBoton: { 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  seccionDescripcion: {
    marginTop: 10,
  },
  textoDescripcion: {
    fontSize: 16,
    lineHeight: 22, 
    color: '#444',
    marginTop: 5,
    textAlign: 'justify', 
  },
  botonMultimedia: { 
    backgroundColor: '#1A237E', 
    padding: 15, 
    borderRadius: 10, 
    marginVertical: 15, 
    alignItems: 'center',
    elevation: 3 
  },
});

export default DetalleScreen;
