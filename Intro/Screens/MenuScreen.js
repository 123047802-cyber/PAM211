import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextInputScreen from './TextInputScreen';
import ImageScreen from './ImageScreen';
import Repaso1Screen from './Repaso1Screen';
import ScrollViewScreen from './ScrollViewScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'input':
      return <TextInputScreen />;
    case 'image':
      return <ImageScreen />;
    case 'registro':
      return <Repaso1Screen />;
    case 'scrollview':
      return <ScrollViewScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>

          <View style={styles.botonesContainer}>
            <Button
              onPress={() => setScreen('contador')}
              color="#53094d"
              title="Práctica Contador"
            />
            <Button
              onPress={() => setScreen('botones')}
              color="#7c056c"
              title="Práctica Buttons & Switch"
            />
            <Button
              onPress={() => setScreen('input')}
              color="#530953"
              title="Práctica Text Input & Alert"
            />
            <Button
              onPress={() => setScreen('image')}
              color="#7a072d"
              title="Práctica ImageBackground & SplashScreen"
            />
            <Button
              onPress={() => setScreen('registro')}
              color="#7c024d"
              title="Práctica Formulario de Registro"
            />
            <Button
              onPress={() => setScreen('scrollview')}
              color="#53094d"
              title="Práctica ScrollView"
            />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4caf8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#53094d',
    marginBottom: 30,
  },
  botonesContainer: {
    marginTop: 20,
    gap: 14,
    width: '70%',
  },
});


