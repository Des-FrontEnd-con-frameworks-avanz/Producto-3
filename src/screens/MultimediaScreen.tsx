/**
 * MultimediaScreen - Pantalla de reproductor multimedia
 * TODO (Mar): Implementar reproductor de video/audio con mínimo 4 botones de interacción
 *
 * Recibe route.params.player con el objeto Player seleccionado (incluye videoUrl y posterUrl).
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { useState, useRef } from 'react';
import Video from 'react-native-video';


type Props = NativeStackScreenProps<RootStackParamList, 'Multimedia'>;

const MultimediaScreen: React.FC<Props> = ({ route }) => {
  const { player } = route.params;

  const videoRef = useRef<React.ComponentRef<typeof Video> | null>(null);

  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onProgress = (data: {currentTime: number} ) => {
    setCurrentTime(data.currentTime);
  }

  const onLoad = (data: {duration: number}) => {
    setDuration(data.duration)
  }

  const reiniciarVideo = () => {
    videoRef.current?.seek(0);
  }

  const adelantar10Segundos = () => {
    videoRef.current?.seek(currentTime+10);
  }

  const progress = duration>0 ? currentTime/ duration: 0;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Multimedia</Text>
        <Video 
          ref={videoRef}
          source={{uri : player.videoUrl}}
          style={styles.videoPlayer}
          paused={paused}
          muted={muted}
          onProgress={onProgress}
          onLoad={onLoad}
          resizeMode="contain"
        />

        <View style={styles.barraContainer}>
          <View style={[styles.barraProgreso, {width: `${progress * 100}%`}]}/>
        </View>

        <View style={styles.controlesContainer}>

          <TouchableOpacity style={styles.boton} onPress={reiniciarVideo}>
            <Text style={styles.textoBoton}>⏮️ Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPaused(!paused)}>
            <Text>{paused ? '▶️ Play' : '⏸️ Pausa'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={adelantar10Segundos}>
            <Text style={styles.textoBoton}>⏩ +10s</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setMuted(!muted)}>
            <Text>{muted ? '🔇 Muted' : '🔊 Sonido'}</Text>
          </TouchableOpacity>

        </View>
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
  videoPlayer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000000', 
  },
  barraContainer: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(104, 104, 104, 0.33)'
  },
  barraProgreso:{
    height: '100%',
    backgroundColor: 'rgba(37, 92, 241, 0.33)'
  },
  controlesContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 10,
  },
  boton: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  }
 
});

export default MultimediaScreen;
