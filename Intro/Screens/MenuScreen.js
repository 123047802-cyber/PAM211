import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from  './BotonesScreen';
import ContadorScreeen from './ContadorScreen';

export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreeen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'menu':
            default:
            return (
                <View>
                    <Text>Menu de Practicas</Text>
                    <Button onPress={()=>setScreen('contador')}color='black' title='Pract:Contador'></Button>
                    <Button onPress={()=>setScreen('botones')}color='black' title='Pract:Botones'></Button>
                </View>

            ) 
        }
}

const styles = StyleSheet.create({})