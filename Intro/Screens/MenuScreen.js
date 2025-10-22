import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from  './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextInputScreen from './TextInputScreen';
import ImageScreen from './ImageScreen';


export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'input':
            return <TextInputScreen/>;
        case 'image':
            return <ImageScreen/>;
        case 'menu':
            default: 
            return (
            <View style={styles.container}>
                <Text>Menú de Prácticas</Text>
                <View style={styles.botonesContainer}>
                <Button onPress={()=>setScreen('contador')} color='#53094dff' title='Práctica Contador'></Button>
                <Button onPress={()=>setScreen('botones')} color='#7c056cff' title='Práctica Buttons & Switch'></Button>
                <Button onPress={()=>setScreen('input')} color='#530953ff' title='Práctica Text Input & Alert'></Button>
                <Button onPress={()=>setScreen('image')} color='#7a072dff' title='Práctica ImageBakground & SlapshScreen'></Button>
                </View>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f4caf8ff',
    alignItems: 'center',//trabaja sobre eje x (start, center, end)
    justifyContent: 'center',//trabaja sobre eje y
  },
    botonesContainer:{
        marginTop: 30,
        //flexDirection: 'row',
        gap:14,
        color:'#53094dff',
        
    },

})