import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../style/style_ajuda';

export default function TelaAdocao() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/images-_1_.png')} // Altere para a sua imagem
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Clique no botão, faça o cadastro, e doe ou adote um pet.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adoção</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


