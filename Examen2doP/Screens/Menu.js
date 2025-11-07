import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

export default function Menu() {
    return (

<ImageBackground>
source={require('../assets/1.jpg')}
style={styles.background}
imageStyle={styles.image}  
</ImageBackground>

//Nombre del restaurante
<View style={styles.overlay}>
<ScrollView
style={styles.scrollArea}
contentContainerStyle={styles.scrollContent}
showsVerticalScrollIndicator={true}
>
<Text style={styles.title}>Restaurante "El Buen Sabor"</Text>
<Text style={styles.description}>
Bienvenidos a "El Buen Sabor", donde la comida es una experiencia inolvidable. Disfruta de nuestros platillos tradicionales y modernos, preparados con ingredientes frescos y de alta calidad.
</Text>

//Seccion de bebidas
<Text style={styles.sectionTitle}>Bebidas</Text>
<View style={styles.item}>
<Text style={styles.itemName}>Limonada</Text>
<Text style={styles.itemPrice}>$30</Text>
</View>

//Seccion postres
<Text style={styles.sectionTitle}>Postres</Text>
<View style={styles.item}>


//button
//alert