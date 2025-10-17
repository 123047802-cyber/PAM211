import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import React, { useState } from 'react'
import BotonesScreen from  './BotonesScreen';
import ContadorScreeen from './ContadorScreen';
import ModalScreen from './ModalScreen';


export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreeen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'menu':
            default:
            return (
<View style={styles.container}>
          <Text style={styles.text}>Menú de practicas</Text>

          <View style={styles.button}>
            <Button
              title="Pract. Contador"
              color="purple"
              onPress={() => setScreen('contador')}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Pract. Botones"
              color='#b924a0ff'
              onPress={() => setScreen('botones')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Pract. Modal"
              color='#550948ff'
              onPress={() => setScreen('modal')}
            />
          </View>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc2f5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#53094dff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    marginVertical: 10,
    width: '40%',
  },
});