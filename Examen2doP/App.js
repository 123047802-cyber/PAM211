import { StatusBar } from 'expo-status-bar';
import {Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground>
            source={require('../assets/1.jpg')}
            style={styles.background}
            imageStyle={styles.image}  
            </ImageBackground>
     //Nombre del restaurante
    
            /<View style={styles.overlay}>
            <ScrollView
            style={styles.scrollArea}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
            >
            <Text style={styles.title}>Restaurante "El Buen Sabor"</Text>
            <Text style={styles.description}>Bienvenidos a "El Buen Sabor", donde la comida es una experiencia inolvidable. Disfruta de nuestros platillos tradicionales y modernos, preparados con ingredientes frescos y de alta calidad.
            </Text>
            //Seccion de bebidas
            <Text style={styles.sectionTitle}>Bebidas</Text>
            <View style={styles.item}>
                <Text style={styles.itemName}>Limonada</Text>
                <Text style={styles.description}>Refrescante bebida de limón natural.</Text>
                <Text style={styles.itemPrice}>$30</Text>
                <Button title="Ordenar" onPress={() => alert('Confirmar orden!')} />
                </View>
                //Seccion postres
                <Text style={styles.sectionTitle}>Postres</Text>
                <View style={styles.item}>
                    <Text style={styles.itemName}>Pastel de Chocolate</Text>
                    <Text style={styles.itemPrice}>$50</Text>
                    <Text style={styles.description}>Delicioso pastel de chocolate con cobertura de ganache.</Text>
                    </View>
                    <Button title="Ordenar" onPress={() => alert('Confirmar orden!')} />
                    </ScrollView>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
