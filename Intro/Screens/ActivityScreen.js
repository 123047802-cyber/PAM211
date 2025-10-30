import { Text, StyleSheet, View,Alert, Platform, ActivityIndicator, Button } from 'react-native'
import { useState } from 'react'

export default function ActivityIndScreen(){
  const[cargando, setCargando] = useState(false);
  const carga =() =>{
    setCargando(true);
    setTimeout(()=>{
      setCargando(false);
      if(Platform.OS==='web'){
        window.alert('Carga completa');
      }else{
        Alert.alert('Carga completa');
      }
    }, 3000);
  };
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Presione para iniciar la  carga</Text>
        <View style={styles.botonesContainer}>
          {cargando ? (<ActivityIndicator size='small' color='#70044cff'></ActivityIndicator>):
          (<Button color='#70044cff' title='Presione para iniciar' onPress={carga}></Button>)}
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#d7a7e2ff',
    alignItems:'center',
    justifyContent:'center',
  },
  texto:{
    color:'#70044cff',
    fontSize:30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle: 'italic'
  },
  botonesContainer:{
    marginTop:20,
    gap:20,
    
  },
})