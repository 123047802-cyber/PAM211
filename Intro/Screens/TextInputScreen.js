import { View, Text, StyleSheet, Button, Alert, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';

export default function TextInputScreen() {

  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');

  const mostrarAlerta = () => {
    if (nombre.trim() === '' || password.trim() === '' || comentario.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('ERROR: por favor llena todos los campos');
      } else {
        Alert.alert('ERROR: por favor llena todos los campos');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert('HOLA ' + nombre + '\nTu comentario: ' + comentario);
      } else {
        Alert.alert('HOLA ' + nombre, 'Tu comentario: ' + comentario);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TextScreen</Text>

      <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu nombre'
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}
      />

      <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu contraseña'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        maxLength={50}
      />

      <TextInput
        style={[styles.recuadro, { height: 100, textAlignVertical: 'top' }]}
        placeholder='Escribe tu comentario'
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        maxLength={200}
      />

      <View style={styles.botonContainer}>
        <Button color='#5e0957ff' title='Mostrar saludo' onPress={mostrarAlerta} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4abffff',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recuadro: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: '50%',
    backgroundColor: '#e4abffff',
  },
  botonContainer: {
    width: '50%',
    marginTop: 10,
  },
});

