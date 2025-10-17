import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import React, { useState } from 'react';

//zona de componentes/main
export default function ModalScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Mostrar modal" onPress={() => setModalVisible(true)} color="purple" />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textoModal}>Esto es un modal</Text>
            <Button title="Ocultar modal" onPress={() => setModalVisible(false)} color="purple" />
          </View>
        </View>
      </Modal>

    </View>
  );
}