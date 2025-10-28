import { View, Text, StyleSheet, Button, Alert, TextInput, Platform, Switch, ImageBackground } from 'react-native';
import React, { useState } from 'react';

const BackgroundImage = require('../assets/5.jpeg'); 

export default function Registro() {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptado, setAceptado] = useState(false);

  const correoValido = (texto) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(texto);
  };

  const mostrarAlerta = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('ERROR: Por favor llena todos los campos');
      } else {
        Alert.alert('ERROR', 'Por favor llena todos los campos');
      }
      return;
    }

    if (!correoValido(correo)) {
      if (Platform.OS === 'web') {
        window.alert('ERROR: El correo no es válido');
      } else {
        Alert.alert('ERROR', 'El correo no es válido');
      }
      return;
    }

    if (!aceptado) {
      if (Platform.OS === 'web') {
        window.alert('ERROR: Debes aceptar los términos y condiciones');
      } else {
        Alert.alert('ERROR', 'Debes aceptar los términos y condiciones');
      }
      return;
    }

    if (Platform.OS === 'web') {
      window.alert('Registro exitoso\nNombre: ' + nombre + '\nCorreo: ' + correo);
    } else {
      Alert.alert('Registro exitoso', 'Nombre: ' + nombre + '\nCorreo: ' + correo);
    }
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro</Text>

          <TextInput
            style={styles.recuadro}
            placeholder='Escribe tu nombre'
            value={nombre}
            onChangeText={setNombre}
            maxLength={50}
          />

          <TextInput
            style={styles.recuadro}
            placeholder='Escribe tu correo'
            value={correo}
            onChangeText={setCorreo}
            keyboardType='email-address'
            maxLength={50}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Switch
              value={aceptado}
              onValueChange={setAceptado}
            />
            <Text style={{ marginLeft: 10 }}>Acepto los términos y condiciones</Text>
          </View>

          <Button color='#1b1818ff' title='REGISTRARSE' onPress={mostrarAlerta} />
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formulario: {
    backgroundColor: '#00000025',
    borderRadius: 10,
    padding: 25,
    width: '85%',
    shadowColor: '#000000ff',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  recuadro: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#00000023', 
  },
});
