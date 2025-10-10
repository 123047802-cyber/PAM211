//imports, todo lo extra que podrían necesitar las screens/pantallas
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//zona de componentes/main
export default function ContadorScreen() {
  const[contador,setContador]= useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.texto} > Contador:</Text>
      <Text style={styles.texto2} > {contador} </Text>

      <View style={styles.botonesContainer}>
      <Button color='blue' title='Agregar' onPress={()=>setContador(contador+1)} />
      <Button color='gold'title='Quitar' onPress={()=>setContador(contador-1)} />
      <Button color='green'title='Reiniciar' onPress={()=>setContador(0)} />
    </View>    
      <StatusBar style="auto" />
    </View>
    
  );
}

//zona de estilos, se le asigna la estetica, posicion, etc a los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4d4ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#320e53ff',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
  texto2:{
  color:'#161486ff',
  fontSize:40,
  fontFamily:'Courier',
  fontWeight:'300',
  fontStyle:'italic',
  textDecorationLine:'underline',
  },
  botonesContainer:{
    marginTop:20,
    flexiDirection:'row',
    gap:10,
  },
});